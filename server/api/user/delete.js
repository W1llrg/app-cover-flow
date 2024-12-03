import { AppDataSource } from "~/server/database/database";
import User from "~/server/database/entities/User";
import { readBody, createError, sendError } from "h3";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "super_secret_key";

export default defineEventHandler(async (event) => {
    try {
        const repo = AppDataSource.getRepository(User);
        const body = await readBody(event);
        const { id } = body;

        if (!id) {
            throw createError({
                statusCode: 401,
                statusMessage: "ID inconnu"
            });
        }

        // Récupérer le token Bearer de l'en-tête Authorization
        const authHeader = event.req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw createError({
                statusCode: 401,
                statusMessage: "Token manquant ou invalide"
            });
        }

        const token = authHeader.split(" ")[1];

        // Vérifier et décoder le token
        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (err) {
            throw createError({
                statusCode: 401,
                statusMessage: "Token invalide"
            });
        }

        const userIdFromToken = decoded.id;
        const mailFromToken = decoded.mail;

        // Vérifier si l'utilisateur est autorisé à supprimer le compte
        if (userIdFromToken !== id && mailFromToken !== "admin@example.com") {
            throw createError({
                statusCode: 403,
                statusMessage: "Vous n'êtes pas autorisé à supprimer ce compte"
            });
        }

        const result = await repo.delete(id);

        if (result.affected === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: "Utilisateur non trouvé"
            });
        }

        return {
            statusCode: 200,
            message: "Compte supprimé avec succès"
        };
    } catch (e) {
        console.error("Erreur lors de la suppression de l'utilisateur :", e);
        sendError(event, e);
    }
});