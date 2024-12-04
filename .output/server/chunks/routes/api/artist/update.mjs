import { d as defineEventHandler, A as AppDataSource, a as Artist, r as readBody, c as createError, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const update = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Artist);
    const body = await readBody(event);
    const { name, description } = body;
    if (!name || !description) {
      throw createError({
        statusCode: 401,
        statusMessage: "Param\xE8tres introuvables ou invalide"
      });
    }
    const artist = await repo.update({ name }, { description });
    return {
      statusCode: 200,
      message: "insertion r\xE9ussie"
    };
  } catch (e) {
    sendError(event, e);
  }
});

export { update as default };
//# sourceMappingURL=update.mjs.map
