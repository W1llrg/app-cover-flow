import { d as defineEventHandler, r as readBody, c as createError, A as AppDataSource, U as User, s as sendError } from '../../../nitro/nitro.mjs';
import bcrypt from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'typeorm';
import 'node:url';

const saltRounds = 10;
const create = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { mail, password, username } = body;
    if (!mail || !password || !username) {
      throw createError({
        statusCode: 400,
        statusMessage: "mail, mot de passe et nom d'utilisateur sont requis"
      });
    }
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({ where: [{ mail }, { username }] });
    if (existingUser) {
      return {
        statusCode: 409,
        message: "Un utilisateur avec cet mail ou nom d'utilisateur existe d\xE9j\xE0"
      };
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = userRepository.create({
      mail,
      password: hashedPassword,
      username
    });
    await userRepository.save(newUser);
    return {
      statusCode: 201,
      message: "Utilisateur cr\xE9\xE9 avec succ\xE8s"
    };
  } catch (error) {
    console.error("Erreur lors de la cr\xE9ation de l'utilisateur :", error);
    sendError(event, error);
  }
});

export { create as default };
//# sourceMappingURL=create.mjs.map
