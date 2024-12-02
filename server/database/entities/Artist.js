import {EntitySchema} from 'typeorm';

const Artist = new EntitySchema({
	name: "Artist",
	tableName: "artists",
	columns: {
		id: {
			type: "int",
			primary: true,
			generated: true
		},
		name: {
			type: "varchar"
		},
		description: {
			type: "varchar",
		}
	},
	relations: {
		songs: {
			type: "one-to-many",
			target: "Song",
			inverseSide: "artist"
		}
	}
});

export default Artist;