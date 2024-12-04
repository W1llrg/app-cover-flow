import { d as defineEventHandler, A as AppDataSource, S as Song, b as getQuery, c as createError, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const get = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Song);
    const query = getQuery(event);
    const { id } = query;
    let result;
    if (id) {
      const song = await repo.findOneBy({ id: parseInt(id) });
      if (!song) {
        throw createError({
          statusCode: 404,
          statusMessage: "Chanson non trouv\xE9e"
        });
      }
      result = song;
    } else {
      const songs = await repo.find();
      result = songs;
    }
    return {
      statusCode: 200,
      data: result
    };
  } catch (e) {
    sendError(event, e);
  }
});

export { get as default };
//# sourceMappingURL=get.mjs.map
