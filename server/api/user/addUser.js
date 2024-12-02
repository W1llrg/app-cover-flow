import { defineEventHandler, readBody, createError, sendError } from "h3";
import bcrypt from "bcrypt";
import { AppDataSource } from "../../database/database";
import User from "../../database/entities/User";

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

        const userRepository = AppDataSource.getRepository(User);

        // Vérifiez si un utilisateur avec le même email ou nom d'utilisateur existe déjà
        const existingUser = await userRepository.findOne({ where: [{ mail: email }, { username: username }] });

        if (existingUser) {
            return {
                statusCode: 409,
                message: "Un utilisateur avec cet email ou nom d'utilisateur existe déjà",
            };
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

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