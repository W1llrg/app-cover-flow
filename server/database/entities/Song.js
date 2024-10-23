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
	}
});

export default Song;