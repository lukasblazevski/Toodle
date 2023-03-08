import Timestamp from 'components/Timestamp';
import DataContext from 'lib/DataContext';
import useCourse from 'lib/useCourse';
import { useContext } from 'react';

export default function CourseAssignmentListing({ item }) {
	const { user } = useContext(DataContext);
	const course = useCourse();

	const submitted = item.submissions.some(submission => submission.student === user.email);

	return (
		<div className={`course-assign-container${submitted ? ' submitted' : ''}`}>
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
						Due: <Timestamp short value={item.dueDate} />
					</div>
					<div className='course-assign-container-remaining'>
						(<Timestamp relative value={item.dueDate} />)
					</div>
				</div>
			)}
		</div>
	);
}
