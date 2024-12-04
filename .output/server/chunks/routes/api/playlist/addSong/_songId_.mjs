import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError, A as AppDataSource, P as Playlist, s as sendError } from '../../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const _songId_ = defineEventHandler(async (event) => {
  try {
    const songId = getRouterParam(event, "songId");
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
      relations: ["songs"]
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
    const isSongInPlaylist = playlist.songs.some((existingSong) => existingSong.id === song.id);
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
  } catch (e) {
    sendError(event, e);
  }
});

export { _songId_ as default };
//# sourceMappingURL=_songId_.mjs.map
