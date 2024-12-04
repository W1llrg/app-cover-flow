import {AppDataSource} from "~/server/database/database";
import Playlist from "~/server/database/entities/Playlist";
import {createError, readBody, sendError} from "h3";

export default defineEventHandler(async (event) => {
	try {
		const repo = AppDataSource.getRepository(Playlist);
		const body = await readBody(event);
		const {name, description} = body;

		if (!name || !description) {
			createError({
				statusCode: 401,
				statusMessage: "paramètres rentrés invalide ou manquant",
			});
		}

		const playlist = repo.create({
			name: name,
			description: description,
		});

		await repo.save(playlist);

		return {
			statusCode: 200,
			message: "Playlist créée"
		};
	} catch (e: any) {
		sendError(event, e);
	}
})