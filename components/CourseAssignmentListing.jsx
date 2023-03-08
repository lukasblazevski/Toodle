import RelativeDate from 'components/RelativeDate';
import DataContext from 'lib/DataContext';
import useCourse from 'lib/useCourse';
import { useContext } from 'react';
import AbsoluteDate from './AbsoluteDate';

export default function CourseAssignmentListing({ item }) {
	const { user } = useContext(DataContext);
	const course = useCourse();

	const submitted = item.submissions.some(submission => submission.student === user.email);

	return (
		<div className='course-assign-container'>
			<div className='course-assign-container-name'>
				<h4>
					<a className='course-assign-container-name-link' href={`/course/${course.id}/item/${item.id}`}>
						{item.name}
					</a>
				</h4>
			</div>

			{submitted ? (
				<div className='course-assign-container-due-stack'>Submitted</div>
			) : (
				<div className='course-assign-container-due-stack'>
					<div className='course-assign-container-due'>
						Due: <AbsoluteDate value={item.dueDate} />
					</div>
					<div className='course-assign-container-remaining'>
						(<RelativeDate value={item.dueDate} />)
					</div>
				</div>
			)}
		</div>
	);
}
