import { DataSource } from "typeorm";
import User from "./entities/User";
import Playlist from "./entities/Playlist";
import Song from "./entities/Song";
import Artist from "./entities/Artist";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [User, Playlist, Song, Artist],
    synchronize: true,
    logging: false,
});

const initialize = async () => {
    if (AppDataSource.isInitialized) {
        console.log("DB: Already initialized");
        return;
    }

    try {
        await AppDataSource.initialize();
        console.log("DB: Successfully initialized");
    } catch (error) {
        console.error("DB: Failed to initialize database", error);
        throw error;
    }
};

console.log("file ran");

export { AppDataSource, initialize };