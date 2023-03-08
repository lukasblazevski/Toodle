import useCourse from 'lib/useCourse';

export default function CourseContainer({ children }) {
	const course = useCourse();

	return (
		<div id='course-top-div'>
			<div id='course-title-top-div'>
				<div id='course-title-div'>
					<h3 id='course-title-name'>{course.id} - {course.name}</h3>
					<div id="course-location">
						<h5 id='course-location-link'>Course Location</h5>
						<span>
							{course.location}
						</span>
					</div>
				</div>
			</div>
			<div id='course-page-contents'>
				<div id="course-page-nav-container">
					<div className='course-sidebar-item'>
						<a href={`/course/${course.id}`}>Home</a>
					</div>
					<div className='course-sidebar-item'>
						<a href={`/course/${course.id}/announcements`}>Announcements</a>
					</div>
					<div className='course-sidebar-item'>
						<a href={`/course/${course.id}/members`}>Members</a>
					</div>
				</div>

				<div id="course-center-box">
					<div id='course-center-container'>
						{children}
					</div>
				</div>

				{/* <div id="course-nav-right-container">
					<div id="course-nav-right-div">
						<div className="course-nav-right-item">
							<a href="#">Test1</a>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
