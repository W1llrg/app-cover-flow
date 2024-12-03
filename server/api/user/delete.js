import { defineEventHandler, readBody, createError, sendError } from "h3";
import { AppDataSource } from "../../database/database";
import User from "../../database/entities/User";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { id } = body;

        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: "ID est requis",
            });
        }

        const userRepository = AppDataSource.getRepository(User);
        const result = await userRepository.delete(id);
        console.log("Deleted user:", result);
        if (result.affected === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: "Utilisateur non trouvé",
            });
        }

        return {
            statusCode: 200,
            message: "Utilisateur supprimé avec succès",
        };
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
        sendError(event, error);
    }
});