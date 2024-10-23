import {EntitySchema} from 'typeorm';

const User = new EntitySchema({
	name: "User",
	tableName: "users",
	columns: {
		id: {
			type: "int",
			primary: true,
			generated: true
		},
		username: {
			type: "varchar",
			unique: true
		},
		mail: {
			type: "varchar"
		},
		password: {
			type: "varchar"
		}
	},
	relations: {
		playlists: {
			type: "one-to-many",
			target: "Playlist",
			inverseSide: "user"
		}
	}
});

export default User;