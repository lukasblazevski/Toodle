import CourseContainer from 'components/CourseContainer';
import CourseMember from 'components/CourseMember';
import useCourse from 'lib/useCourse';

export default function Component() {
	const course = useCourse();

	return (
		<CourseContainer>
			<div className='course-people-main-div'>
				<div id='course-people-header'>
					<h3>Course Members</h3>
				</div>

				<CourseMember email={course.professor} />
				{course.students.map(student => (
					<CourseMember key={student.email} email={student.email} />
				))}

				<div className="course-people-footer">
					<a href={`mailto:${course.students.map(student => student.email).join(',')}`} target="_blank">
						Email All Students
					</a>
				</div>
			</div>
		</CourseContainer>
	);
}
