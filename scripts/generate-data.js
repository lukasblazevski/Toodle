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
		type: 'student',
		email: 'grantgryczan@oakland.edu',
		firstName: 'Grant',
		lastName: 'Gryczan',
		password: await argon2.hash('grantpass')
	});

	await users.insertOne({
		type: 'professor',
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
		id: 'CSI-3500',
		name: 'Human Computer Interaction',
		professor: 'jordancostlow@oakland.edu',
		location: 'Online',
		description: 'This course surveys various components and techniques of Human Computer Interactions (HCI). Topics include the basic perceptual, cognitive, performance capabilities of people and external factors that affect these capabilities. Various tools and techniques for understanding and evaluating the interactions of people with technology are discussed. Systematic process for designing, prototyping, evaluating and revising interactive systems are studied.',
		items: [
			{
				type: 'embed',
				date: new Date('2023-01-08'),
				name: 'Syllabus',
				attachment: 'CSI-3500-Syllabus.pdf'
			},
			{
				type: 'assignment',
				date: new Date('2023-03-06'),
				dueDate: new Date('2023-03-10T12:00'),
				name: 'Individual assignment: Persona Readings',
				points: 10,
				description: 'Like any reading assignment, submit three copy/pasted sentences per reading in the numbered list below.\n\n1. About Face, 4th edition - chapter 3 (teaches you what a persona is, why they are important to a user-centered design process, and how to make one)',
				attachments: [],
				submissions: [
					{
						date: new Date('January 22, 2023 3:24 PM'),
						student: 'grantgryczan@oakland.edu',
						attachment: 'Individual Assignment 2.pdf',
						points: 8
					}
				]
			},
			{
				type: 'assignment',
				date: new Date('2023-03-07'),
				dueDate: new Date('2023-03-12T23:59'),
				name: 'Group assignment: Key Path Scenario',
				points: 100,
				description: 'Select one of the three persona+problem scenario pairs that you claimed last week. You will design a key path scenario for this persona and their problem.',
				attachments: [],
				submissions: []
			}
		],
		students: [
			{ email: 'grantgryczan@oakland.edu' },
			{ email: 'lblazevski@oakland.edu' }
		]
	});
}

async function run() {
	await generateAttachments();
	await generateUsers();
	await generateCourses();

	console.log('Done!');
	process.exit();
}

run();
