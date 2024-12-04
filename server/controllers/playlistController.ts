import {AppDataSource} from '../database/database';
import Playlist from "../database/entities/Playlist";
import {Repository} from "typeorm";

const createPlaylist = async (json: JSON) =>
{
	const playlistRepository: Repository<any> = AppDataSource.getRepository(Playlist);
	try {
		playlistRepository.create({
			name: json.name,
			description: json.description
		});
		await playlistRepository.save(playlistRepository);
	} catch (e) {
		throw new Error("Erreur lors de la création d'une nouvelle playlist:", e);
	}
}