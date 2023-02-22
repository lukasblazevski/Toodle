import Cookies from 'cookies';
import db from './db';

export const setUserToCookies = async (req, res, user) => {
	const cookies = new Cookies(req, res);
	cookies.set('user', user.email, {
		sameSite: 'strict',
		maxAge: 1000 * 60 * 60 * 24 * 7
	});
};

export const getUserFromCookies = async (req, res) => {
	const cookies = new Cookies(req, res);
	const email = cookies.get('user');

	if (email) {
		const users = db.collection('users');

		const user = await users.findOne({ email });

		return user;
	}
};

export const deleteUserFromCookies = async (req, res) => {
	const cookies = new Cookies(req, res);
	cookies.set('user', undefined);
};
