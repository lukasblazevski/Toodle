const db = require('../lib/db');
const argon2 = require('argon2');
const fs = require('node:fs/promises');

const attachments = db.collection('attachments');
const users = db.collection('users');
const courses = db.collection('courses');

async function generateAttachments() {
	try {
		await attachments.drop();
	} catch {}

	const filenames = await fs.readdir('scripts/attachments');

	for (const filename of filenames) {
		fs.readFile(`scripts/attachments/${filename}`).then(async data => {
			await attachments.insertOne({
				name: filename,
				data
			})
		})
	}
}

async function generateUsers() {
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
}

async function generateCourses() {
	try {
		await courses.drop();
	} catch {}

	await courses.insertOne({
		id: 'CSI 3500',
		name: 'Human Computer Interaction',
		professor: 'grantgryczan@oakland.edu',
		location: 'Online',
		items: [
			{
				type: 'embed',
				date: new Date('January 8, 2023'),
				name: 'Syllabus',
				attachment: 'CSI-3500-Syllabus.pdf'
			},
			{
				type: 'assignment',
				date: new Date('January 14, 2023'),
				dueDate: new Date('January 21, 2023'),
				name: 'Individual assignment: Persona Readings',
				points: 10,
				description: 'Like any reading assignment, submit three copy/pasted sentences per reading in the numbered list below.\n\n1. About Face, 4th edition - chapter 3 (teaches you what a persona is, why they are important to a user-centered design process, and how to make one)',
				attachments: [],
				submissions: [
					{
						date: new Date('January 20, 2023 3:24 PM'),
						student: 'jordancostlow@oakland.edu',
						attachment: 'Individual Assignment 2.pdf',
						points: 8
					}
				]
			}
		],
		students: [
			{ email: 'jordancostlow@oakland.edu' },
			{ email: 'adonaghy@oakland.edu' },
			{ email: 'lblazevski@oakland.edu' }
		]
	})
}

async function run() {
	await generateAttachments();
	await generateUsers();
	await generateCourses();

	console.log('Done!');
	process.exit();
}

run();
