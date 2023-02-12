const { Collection, MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

let toodleDB;

const connection = client.connect().then(() => {
	toodleDB = client.db('toodle');
	return toodleDB;
});

const collectionKeys = Object.getOwnPropertyNames(Collection.prototype);

const db = {
	collection: name => {
		if (toodleDB) {
			return toodleDB.collection(name);
		}

		const partialCollection = {};

		const collectionUpdate = connection.then(() => {
			const collection = toodleDB.collection(name);

			for (const key of collectionKeys) {
				const value = collection[key];
				partialCollection[key] = (
					typeof value === 'function'
						? value.bind(collection)
						: value
				);
			}
		});

		for (const key of collectionKeys) {
			partialCollection[key] = async (...args) => {
				await collectionUpdate;
				return partialCollection[key](...args);
			};
		}

		return partialCollection;
	}
};

module.exports = db;
