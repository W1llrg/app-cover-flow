import { defineEventHandler, readBody, createError, sendError } from "h3";
import { AppDataSource } from "~/server/database/database";
import Song from "~/server/database/entities/Song";
import Artist from "~/server/database/entities/Artist";

export default defineEventHandler(async (event) => {
    try {
        const repo = AppDataSource.getRepository(Song);
        const artistRepo = AppDataSource.getRepository(Artist);
        const body = await readBody(event);
        const { name, artist, cover, path, artistId } = body;

        if (!name || !artist || !cover || !path || !artistId) {
            console.log("body", body);
            console.log("name", name);
            console.log("artist", artist);
            console.log("cover", cover);
            console.log("artistId", artistId);
            
            throw createError({
                statusCode: 401,
                statusMessage: "Paramètres introuvables ou invalide"
            });
        }

        // Vérifier si l'artiste existe
        const existingArtist = await artistRepo.findOneBy({ id: artistId });
        if (!existingArtist) {
            throw createError({
                statusCode: 404,
                statusMessage: "Artiste non trouvé"
            });
        }

        const song = repo.create({
            name: name,
            artist: existingArtist, // Utiliser l'artiste existant
            cover: cover,
            path: path,
        });

        await repo.save(song);

        return {
            statusCode: 200,
            message: "insertion réussie"
        };
    } catch (e) {
        console.error("Erreur lors de la création de la chanson :", e);
        sendError(event, e);
    }
});