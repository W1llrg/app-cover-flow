import { AppDataSource } from "~/server/database/database";
import Song from "~/server/database/entities/Song";
import { readBody, createError, sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const repo = AppDataSource.getRepository(Song);
        const body = await readBody(event);
        const { id } = body;

        if (!id) {
            throw createError({
                statusCode: 401,
                statusMessage: "ID inconnu"
            });
        }

        const result = await repo.delete(id);

        if (result.affected === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: "Chanson non trouvée"
            });
        }

        return {
            statusCode: 200,
            message: "Deleted successfully"
        };
    } catch (e) {
        sendError(event, e);
    }
});