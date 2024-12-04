import { d as defineEventHandler, A as AppDataSource, S as Song, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const getAll = defineEventHandler(async (event) => {
  try {
    const repo = AppDataSource.getRepository(Song);
    const songs = await repo.find();
    return {
      statusCode: 200,
      songs
    };
  } catch (e) {
    sendError(event, e);
  }
});

export { getAll as default };
//# sourceMappingURL=getAll.mjs.map
