import { d as defineEventHandler, A as AppDataSource, S as Song, a as Artist, r as readBody, c as createError, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const create = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Song);
    const artistRepo = AppDataSource.getRepository(Artist);
    const body = await readBody(event);
    const { name, artist, cover, path, artistId } = body;
    if (!name || !artist || !cover || !path || !artistId) {
      console.log("body", body);
      console.log("name", name);
      console.log("artist", artist);
      console.log("cover", cover);
      console.log("artistId", artistId);
      throw createError({
        statusCode: 401,
        statusMessage: "Param\xE8tres introuvables ou invalide"
      });
    }
    const existingArtist = await artistRepo.findOneBy({ id: artistId });
    if (!existingArtist) {
      throw createError({
        statusCode: 404,
        statusMessage: "Artiste non trouv\xE9"
      });
    }
    const song = repo.create({
      name,
      artist: existingArtist,
      // Utiliser l'artiste existant
      cover,
      path
    });
    await repo.save(song);
    return {
      statusCode: 200,
      message: "insertion r\xE9ussie"
    };
  } catch (e) {
    console.error("Erreur lors de la cr\xE9ation de la chanson :", e);
    sendError(event, e);
  }
});

export { create as default };
//# sourceMappingURL=create.mjs.map
