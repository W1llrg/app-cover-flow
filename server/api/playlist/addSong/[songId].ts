import {AppDataSource} from "~/server/database/database";
import Playlist from "~/server/database/entities/Playlist";
import {createError, readBody, sendError} from "h3";

export default defineEventHandler((event) => {
	try {
		const songId = getRouteParam(event, "songId");
		const body = await readBody(event);
		const playlistId = body.playlistId;

		if (!songId) {
			throw createError({
				statusCode: 400,
				statusMessage: "ID requis1"
			});
		}

		if (!playlistId) {
			throw createError({
				statusCode: 400,
				statusMessage: "ID requis"
			});
		}

		const playlistRepo = AppDataSource.getRepository(Playlist);
		const songRepo = AppDataSource.getRepository(Song);

		const playlist = await playlistRepo.findOne({
			where: { id: playlistId },
			relations: ['songs']
		});

		const song = await songRepo.findOne({
			where: { id: Number(songId) }
		});

		if (!playlist) {
			throw createError({
				statusCode: 404,
				statusMessage: "Playlist introuvable"
			});
		}

		if (!song) {
			throw createError({
				statusCode: 404,
				statusMessage: "Song introuvable"
			});
		}

		const isSongInPlaylist = playlist.songs.some(existingSong => existingSong.id === song.id);

		if (isSongInPlaylist) {
			throw createError({
				statusCode: 400,
				statusMessage: "Song is already in the playlist"
			});
		}

		playlist.songs.push(song);

		await playlistRepo.save(playlist);

		return {
			statusCode: 200,
			message: "Song added to playlist successfully"
		};
	} catch (e: any) {
		sendError(event, e);
	}
})