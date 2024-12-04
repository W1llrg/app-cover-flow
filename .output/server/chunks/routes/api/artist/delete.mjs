import { d as defineEventHandler, A as AppDataSource, a as Artist, r as readBody, c as createError, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const _delete = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Artist);
    const body = await readBody(event);
    const { id } = body;
    if (!id) {
      throw createError({
        statusCode: 401,
        statusMessage: "ID inconnu"
      });
    }
    const artist = await repo.delete(id);
    return {
      statusCode: 200,
      message: "Deleted successfully"
    };
  } catch (e) {
    sendError(event, e);
  }
});

export { _delete as default };
//# sourceMappingURL=delete.mjs.map
