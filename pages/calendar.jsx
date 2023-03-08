import { useState, useContext } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 



export default function Component() {
	const { user, courses } = useContext(DataContext);
  const [selectedDate, setSelectedDate] = useState(new Date()); 

	return (
		<div id='dash-main-div'>
      <Calendar value={selectedDate} onChange={setSelectedDate} /> {/* add this line */}
			<main id='dash-main'>
				<h2 id='dash-course-name'>Courses</h2>
				<div className='dash-class-list'>
					{courses.map(course => (
						<div key={course.id} className='dash-class-container'>
							<div className='dash-class-title'>
								<h3>{course.id} - {course.name}</h3>
							</div>
							<Button href={`/course/${course.id}`}>
								Open Course
							</Button>
							{' '}
							<a href="https://zoom.us/join" target="_blank">Join Zoom Meeting</a>
						</div>
					))}
				</div>
			</main>
			<footer id='dash-footer'>
				<h2 id='dash-upcoming-assignments-name'>Upcoming Assignments</h2>
				<div className='dash-upcoming-assignments-list'>
					{courses.map(course => (
						<Fragment key={course.id}>
							{course.items.map((item, i) => ({
								...item,
								id: i
							})).filter(item => (
								item.type === 'assignment'
								&& !item.submissions.some(submission => (
									submission.student === user.email
								))
							)).sort((a, b) => (
								+new Date(a.dueDate) - new Date(b.dueDate)
							)).map(item => (
								<UpcomingAssignment key={item.id} course={course} itemID={item.id} />
							))}
						</Fragment>
					))}
				</div>
			</footer>
		</div>
	);
}
