import {EntitySchema} from 'typeorm';

const Playlist = new EntitySchema({
	name: "Playlist",
	tableName: "playlists",
	columns: {
		id: {
			type: "int",
			primary: true,
			generated: true // Auto-increment
		},
		name: {
			type: "varchar"
		},
		description: {
			type: "varchar"
		}
	},
	relations: {
		user: {
			type: "many-to-one",
			target: "User",
			joinColumn: true, // This will create the foreign key column
			inverseSide: "playlists"
		},
		songs: {
			type: "many-to-many",
			target: "Song",
			joinTable: true // This creates a join table for the many-to-many relationship
		}
	}
});

export default Playlist;