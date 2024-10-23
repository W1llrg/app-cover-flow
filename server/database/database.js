import {DataSource} from "typeorm"
import User from "./entities/User"
import Playlist from "./entities/Playlist"
import Song from "./entities/Song"

const AppDataSource = new DataSource({
	type: "sqlite",
	database: "./db.sqlite",
	entities: [User, Playlist, Song],
	synchronize: true,
	logging: false,
});

const initialize = async () =>
{
	if (AppDataSource.isInitialized) {
		console.log('DB: Already initialized')
		return
	}

	try {
		await AppDataSource.initialize()
	} catch (error) {
		console.error('DB: Failed to initialized database')
		throw error
	}
}

console.log("file ran");

export { AppDataSource, initialize };