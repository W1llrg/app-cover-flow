import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const _delete = defineEventHandler((event) => {
  return {
    // TODO
    post: "delete playlist"
  };
});

export { _delete as default };
//# sourceMappingURL=delete.mjs.map
