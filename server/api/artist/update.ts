import {AppDataSource} from "~/server/database/database";
import Artist from "~/server/database/entities/Artist";
import {createError, readBody, sendError} from "h3";

export default defineEventHandler(async (event) => {
	try {
		const repo = AppDataSource.getRepository(Artist);
		const body = await readBody(event);
		const {name, description} = body;

		if (!name || !description) {
			throw createError({
				statusCode: 401,
				statusMessage: "Paramètres introuvables ou invalide"
			});
		}

		const artist = await repo.update({name: name}, {description: description});

		return {
			statusCode: 200,
			message: "insertion réussie"
		};
	} catch (e: any) {
		sendError(event, e);
	}
})