import {AppDataSource} from "~/server/database/database";
import Artist from "~/server/database/entities/Artist";
import {readBody, createError} from "h3";

export default defineEventHandler(async (event) => {
	try {
		const repo = AppDataSource.getRepository(Artist);
		const body = await readBody(event);
		const {id} = body;

		if (!id) {
			throw createError({
				statusCode: 401,
				statusMessage: "ID inconnu"
			});
		}

		const artist = await repo.delete(id);

		return {
			statusCode: 200,
			message: "Deleted successfully"
		};
	} catch (e: any) {
		sendError(event, e);
	}
})