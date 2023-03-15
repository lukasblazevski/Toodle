import db from 'lib/db';
import { getUserFromCookies } from 'lib/cookies';

export default async function handler(req, res) {
	if (req.method !== 'PATCH') {
		res.status(405).end();
		return;
	}

	const courses = db.collection('courses');

	const course = await courses.findOne({ id: req.query.courseID });
	const item = course?.items[req.query.itemID];

	if (!item) {
		res.status(404).send('Course item not found.');
		return;
	}

	const user = await getUserFromCookies(req, res);

	if (user.email !== course.professor) {
		res.status(403).send('To manage a course, you must be signed in as its professor.');
		return;
	}

	Object.assign(item, req.body);

	await courses.updateOne({
		id: req.query.courseID
	}, {
		$set: {
			[`items.${req.query.itemID}`]: item
		}
	});

	res.end();
}
