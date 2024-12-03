import {AppDataSource} from "~/server/database/database";
import Artist from "~/server/database/entities/Artist";
import {createError, readBody, sendError} from "h3";

export default defineEventHandler(async (event) => {
	try {
		const repo = AppDataSource.getRepository(Artist);

		const songs = await repo.find();

		return {
			statusCode: 200,
			songs: songs
		};
	} catch (e: any) {
		sendError(event, e);
	}
})