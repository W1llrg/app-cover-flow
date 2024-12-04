import { d as defineEventHandler, A as AppDataSource, P as Playlist, r as readBody, c as createError, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const create = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Playlist);
    const body = await readBody(event);
    const { name, description } = body;
    if (!name || !description) {
      createError({
        statusCode: 401,
        statusMessage: "param\xE8tres rentr\xE9s invalide ou manquant"
      });
    }
    const playlist = repo.create({
      name,
      description
    });
    await repo.save(playlist);
    return {
      statusCode: 200,
      message: "Playlist cr\xE9\xE9e"
    };
  } catch (e) {
    sendError(event, e);
  }
});

export { create as default };
//# sourceMappingURL=create.mjs.map
