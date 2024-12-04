import { d as defineEventHandler, r as readBody, c as createError, A as AppDataSource, U as User, s as sendError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';

const _delete = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { id } = body;
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID est requis"
      });
    }
    const userRepository = AppDataSource.getRepository(User);
    const result = await userRepository.delete(id);
    console.log("Deleted user:", result);
    if (result.affected === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Utilisateur non trouv\xE9"
      });
    }
    return {
      statusCode: 200,
      message: "Utilisateur supprim\xE9 avec succ\xE8s"
    };
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    sendError(event, error);
  }
});

export { _delete as default };
//# sourceMappingURL=delete.mjs.map
