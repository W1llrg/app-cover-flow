import { defineEventHandler, readBody, createError, sendError } from "h3";
import bcrypt from "bcrypt";
import { AppDataSource } from "../database/database";
import User from "../database/entities/User";

const saltRounds = 10;

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		const { email, password, username } = body;

		if (!email || !password || !username) {
			throw createError({
				statusCode: 400,
				statusMessage: "Email, mot de passe et nom d'utilisateur sont requis",
			});
		}

		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const userRepository = AppDataSource.getRepository(User);
		const newUser = userRepository.create({
			mail: email,
			password: hashedPassword,
			username: username,
		});

		await userRepository.save(newUser);

		return {
			statusCode: 201,
			message: "Utilisateur créé avec succès",
		};
	} catch (error) {
		console.error("Erreur lors de la création de l'utilisateur :", error);
		sendError(event, error);
	}
});
