import { defineEventHandler, createError, sendError } from "h3";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../database/database";
import User from "../database/entities/User";

const SECRET_KEY = process.env.SECRET_KEY || "votre_secret_key";

export default defineEventHandler(async (event) => {
	try {
		const authHeader = event.req.headers.authorization;

		if (!authHeader || !authHeader.startsWith("Basic ")) {
			throw createError({
				statusCode: 401,
				statusMessage: "En-tête d'authentification manquant ou invalide",
			});
		}

		const base64Credentials = authHeader.split(" ")[1];
		const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
		const [email, password] = credentials.split(":");

		// Vérifier si l'utilisateur existe
		const userRepository = AppDataSource.getRepository(User);
		const user = await userRepository.findOne({ where: { mail: email } });

		if (!user) {
			throw createError({
				statusCode: 401,
				statusMessage: "Email ou mot de passe incorrect",
			});
		}

		// Vérifier le mot de passe
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			throw createError({
				statusCode: 401,
				statusMessage: "Email ou mot de passe incorrect",
			});
		}

		// Générer un token JWT
		const token = jwt.sign({ id: user.id, email: user.mail }, SECRET_KEY, { expiresIn: "1h" });

		// Retourner le token en JSON
		return {
			statusCode: 200,
			message: "Connexion réussie",
			token,
		};
	} catch (error) {
		sendError(event, error);
	}
});
