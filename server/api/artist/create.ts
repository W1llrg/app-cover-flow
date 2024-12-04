import {defineEventHandler, readBody, createError, sendError, H3Error} from "h3";
import {AppDataSource} from "~/server/database/database";
import Artist from "~/server/database/entities/Artist";

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

		const artist = repo.create({
			name: name,
			description: description,
		});

		await repo.save(artist);

		return {
			statusCode: 200,
			message: "insertion réussie"
		};
	} catch (e: any) {
		sendError(event, e);
	}
})