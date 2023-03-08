import RelativeDate from 'components/RelativeDate';
import useCourse from 'lib/useCourse';

export default function CourseAssignmentListing({ item }) {
	const course = useCourse();

	return (
		<div className='course-assign-container'>
			<div className='course-assign-container-name'>
				<h4>
					<a className='course-assign-container-name-link' href={`/course/${course.id}/item/${item.id}`}>
						{item.name}
					</a>
				</h4>
			</div>

			<div className='course-assign-container-due-static'>
				<h8></h8>
			</div>

			{/*text change to submitted when submitted*/}
			<div className='course-assign-container-due-stack'>
				<div className='course-assign-container-due'>
					<h8>Due: Feb 8 at 11:59pm</h8>
				</div>
				<div className='course-assign-container-remaining'>
					<h8><RelativeDate value={2} /></h8>
				</div>
			</div>
		</div>
	);
}
