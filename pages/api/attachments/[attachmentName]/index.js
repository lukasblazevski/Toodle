import db from 'lib/db';
import { buffer as getBuffer } from 'micro';

export const config = {
	api: {
		bodyParser: false
	}
};

export default async function handler(req, res) {
	const attachments = db.collection('attachments');
	let name = req.query.attachmentName;

	if (req.method === 'GET') {
		const attachment = await attachments.findOne({ name });

		res.setHeader('Content-Type', 'application/octet-stream').send(attachment.data.buffer);
		return;
	}

	if (req.method !== 'POST') {
		res.status(405);
		return;
	}

	let buffer;
	try {
		buffer = await getBuffer(req, { limit: '100mb' });
	} catch {
		res.status(400).send('That file is too big! The file limit is 100 MB.');
		return;
	}

	const dotIndex = name.indexOf('.');
	const initialNameWithoutExtension = dotIndex === -1 ? name : name.slice(0, dotIndex);
	const extension = dotIndex === -1 ? '' : name.slice(dotIndex);

	let number = 1;

	while (await attachments.findOne({ name })) {
		number++;
		name = initialNameWithoutExtension + ` (${number})` + extension;
	}

	await attachments.insertOne({
		name,
		data: buffer
	});

	res.send({ name });
}
