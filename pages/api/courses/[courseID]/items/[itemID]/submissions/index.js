import { getUserFromCookies } from 'lib/cookies';
import db from 'lib/db';

export default async function handler(req, res) {
	const user = await getUserFromCookies(req, res);

	if (!user) {
		res.status(403).send('You must be signed in manage your submission.');
		return;
	}

	const courses = db.collection('courses');

	if (req.method === 'DELETE') {
		await courses.updateOne({
			id: req.query.courseID
		}, {
			$pull: {
				[`items.${req.query.itemID}.submissions`]: {
					student: user.email
				}
			}
		});

		res.end();
		return;
	}

	if (req.method !== 'POST') {
		res.status(405).end();
		return;
	}

	await courses.updateOne({
		id: req.query.courseID
	}, {
		$push: {
			[`items.${req.query.itemID}.submissions`]: {
				date: new Date(),
				student: user.email,
				attachment: req.body.attachment
			}
		}
	});

	res.end();
}
