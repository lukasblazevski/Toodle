import Cookies from 'cookies';
import { ObjectId } from 'mongodb';
import db from './db';

export const setUserToCookies = async (req, res, userID) => {
	const cookies = new Cookies(req, res);
	cookies.set('user', userID.toString(), {
		sameSite: 'strict',
		maxAge: 1000 * 60 * 60 * 24 * 7
	});
};

export const getUserFromCookies = async (req, res) => {
	const cookies = new Cookies(req, res);
	const userID = cookies.get('user');

	if (userID) {
		const users = db.collection('users');

		const user = await users.findOne({ _id: ObjectId(userID) });

		return user;
	}
};

export const deleteUserFromCookies = async (req, res) => {
	const cookies = new Cookies(req, res);
	cookies.set('user', undefined);
};
