import {AppDataSource} from "~/server/database/database";
import Song from "~/server/database/entities/Song";
import {createError, readBody, sendError} from "h3";

export default defineEventHandler(async (event) => {
	try {
		const repo = AppDataSource.getRepository(Song);

		const songs = await repo.find();

		return {
			statusCode: 200,
			songs: songs
		};
	} catch (e: any) {
		sendError(event, e);
	}
})