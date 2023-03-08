import Timestamp from './Timestamp';

export default function UpcomingAssignment({ course, itemID }) {
	const item = course.items[itemID];

	return (
		<div className='upcoming-assignment'>
			<a href={`/course/${course.id}`}>
				{course.id} - {course.name}
			</a>
			{' / '}
			<a href={`/course/${course.id}/item/${itemID}`}>
				{item.name}
			</a><br />
			Due: <Timestamp relative value={item.dueDate} />
		</div>
	);
}
