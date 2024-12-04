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
      relations: ["songs"]
    });
    if (!playlist) {
      throw createError({
        statusCode: 404,
        statusMessage: "Playlist introuvable"
      });
    }
    const songIndex = playlist.songs.findIndex(
      (song) => song.id === Number(songId)
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
      message: "Musique supprim\xE9e aces succ\xE8s"
    };
  } catch (e) {
    sendError(event, e);
  }
});

export { _songId_ as default };
//# sourceMappingURL=_songId_.mjs.map
