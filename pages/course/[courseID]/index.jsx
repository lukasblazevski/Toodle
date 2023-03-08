import CourseAssignmentListing from 'components/CourseAssignmentListing';
import CourseContainer from 'components/CourseContainer';
import useCourse from 'lib/useCourse';

export default function Component() {
	const course = useCourse();

	return (
		<CourseContainer>
			<div id='course-home-main-div'>
				<div id='course-home-title'>
					<h3>Description</h3>
				</div>

				<div id='course-home-welcome'>
					{course.description}
				</div>
			</div>

			<div id='course-assign-main-div'>
				<div className="course-assign-header">
					<h3 className="course-assign-header">Assignments</h3>
				</div>

				{course.items.map((item, i) => ({
					...item,
					id: i
				})).filter(item => (
					item.type === 'assignment'
				)).sort((a, b) => (
					+new Date(a.date) - new Date(b.date)
				)).map(item => (
					<CourseAssignmentListing key={item.id} item={item} />
				))}
			</div>
		</CourseContainer>
	);
}
