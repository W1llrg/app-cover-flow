import { d as defineEventHandler, c as createError, A as AppDataSource, U as User, s as sendError } from '../../nitro/nitro.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'typeorm';
import 'node:url';

const SECRET_KEY = process.env.SECRET_KEY || "votre_secret_key";
const login = defineEventHandler(async (event) => {
  try {
    const authHeader = event.req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      throw createError({
        statusCode: 401,
        statusMessage: "En-t\xEAte d'authentification manquant ou invalide"
      });
    }
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
    const [email, password] = credentials.split(":");
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { mail: email } });
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Email ou mot de passe incorrect"
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw createError({
        statusCode: 401,
        statusMessage: "Email ou mot de passe incorrect"
      });
    }
    const token = jwt.sign({ id: user.id, email: user.mail }, SECRET_KEY, { expiresIn: "1h" });
    return {
      statusCode: 200,
      message: "Connexion r\xE9ussie",
      token
    };
  } catch (error) {
    sendError(event, error);
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
