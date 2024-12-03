import {AppDataSource} from "~/server/database/database";
import Playlist from "~/server/database/entities/Playlist";
import Song from "~/server/database/entities/Song";
import {createError, readBody, sendError} from "h3";

export default defineEventHandler(async (event) => {
	try {
		const songId = getRouteParam(event, "songId");

		const body = await readBody(event);
		const playlistId = body.playlistId;

		if (!songId) {
			throw createError({
				statusCode: 400,
				statusMessage: "ID requis"
			});
		}

		if (!playlistId) {
			throw createError({
				statusCode: 400,
				statusMessage: "ID requis"
			});
		}

		const playlistRepo = AppDataSource.getRepository(Playlist);

		const playlist = await playlistRepo.findOne({
			where: { id: playlistId },
			relations: ['songs']
		});

		if (!playlist) {
			throw createError({
				statusCode: 404,
				statusMessage: "Playlist introuvable"
			});
		}

		const songIndex = playlist.songs.findIndex(
			song => song.id === Number(songId)
		);

		if (songIndex === -1) {
			throw createError({
				statusCode: 404,
				statusMessage: "Musique introuvable dans la playlist"
			});
		}

		playlist.songs.splice(songIndex, 1);

		await playlistRepo.save(playlist);

		return {
			statusCode: 200,
			message: "Musique supprimée aces succès"
		};

	} catch (e: any) {
		sendError(event, e);
	}
});