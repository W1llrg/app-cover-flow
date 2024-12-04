import { d as defineEventHandler, A as AppDataSource, S as Song, r as readBody, c as createError, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const _delete = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Song);
    const body = await readBody(event);
    const { id } = body;
    if (!id) {
      throw createError({
        statusCode: 401,
        statusMessage: "ID inconnu"
      });
    }
    const result = await repo.delete(id);
    if (result.affected === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Chanson non trouv\xE9e"
      });
    }
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
