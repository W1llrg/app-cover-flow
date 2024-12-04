import { AppDataSource } from "~/server/database/database";
import Song from "~/server/database/entities/Song";
import { createError, sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const repo = AppDataSource.getRepository(Song);
        const query = getQuery(event);
        const { id } = query;

        let result;

        if (id) {
            const song = await repo.findOneBy({ id: parseInt(id) });

            if (!song) {
                throw createError({
                    statusCode: 404,
                    statusMessage: "Chanson non trouvée"
                });
            }

            result = song;
        } else {
            const songs = await repo.find();
            result = songs;
        }

        return {
            statusCode: 200,
            data: result
        };
    } catch (e) {
        sendError(event, e);
    }
});