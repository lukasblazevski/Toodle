import db from 'lib/db';
import argon2 from 'argon2';
import { deleteUserFromCookies, setUserToCookies } from 'lib/cookies';

export default async function handler(req, res) {
	if (req.method === 'DELETE') {
		await deleteUserFromCookies(req, res);

		res.end();
		return;
	}

	if (req.method !== 'POST') {
		res.status(405);
		return;
	}

	const users = db.collection('users');

	const user = await users.findOne({
		email: req.body.email
	});

	if (!user) {
		res.status(404).send('User not found!');
		return;
	}

	if (!await argon2.verify(user.password, req.body.password)) {
		res.status(401).send('Incorrect password!');
		return;
	}

	await setUserToCookies(req, res, user);

	res.end();
}
