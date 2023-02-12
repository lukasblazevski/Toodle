const db = require('../lib/db');
const argon2 = require('argon2');

const users = db.collection('users');

async function run() {
	try {
		await users.drop();
	} catch {}

	await users.insertOne({
		type: 'professor',
		email: 'grantgryczan@oakland.edu',
		firstName: 'Grant',
		lastName: 'Gryczan',
		password: await argon2.hash('grantpass')
	});

	await users.insertOne({
		type: 'student',
		email: 'jordancostlow@oakland.edu',
		firstName: 'Jordan',
		lastName: 'Costlow',
		password: await argon2.hash('jordanpass')
	});

	await users.insertOne({
		type: 'student',
		email: 'lblazevski@oakland.edu',
		firstName: 'Lukas',
		lastName: 'Blazevski',
		password: await argon2.hash('lukaspass')
	});

	await users.insertOne({
		type: 'student',
		email: 'adonaghy@oakland.edu',
		firstName: 'Ashton',
		lastName: 'Donaghy',
		password: await argon2.hash('ashtonpass')
	});

	console.log('Done!');
	process.exit();
}

run();
