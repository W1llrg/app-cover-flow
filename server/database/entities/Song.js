import {EntitySchema} from 'typeorm';

const Song = new EntitySchema({
	name: "Song",
	tableName: "songs",
	columns: {
		id: {
			type: "int",
			primary: true,
			generated: true
		},
		name: {
			type: "varchar"
		},
		artist: {
			type: "varchar"
		},
		cover: {
			type: "varchar"
		},
		path: {
			type: "varchar"
		}
	},
	relations: {
		artist: {
			type: "many-to-one",
			target: "Artist",
			joinTable: true,
			inverseSide: "songs"
		}
	}
});

export default Song;