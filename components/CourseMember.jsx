import DataContext from 'lib/DataContext';
import useCourse from 'lib/useCourse'
import { useContext } from 'react';

export default function CourseMember({ email }) {
	const course = useCourse();
	const { users } = useContext(DataContext);

	const member = users.find(user => user.email === email);
	const isProfessor = course.professor === email;

	return (
		<div className='course-people-container'>
			<div className='course-people-container-namerole-div'>
				<div className='course-people-container-name'>
					<h4>{member.firstName} {member.lastName}</h4>
				</div>
				<div className='course-people-container-role'>
					<p>{isProfessor ? 'Professor' : 'Student'}</p>
				</div>
			</div>
			<div className='course-people-container-email'>
				<h5><a href={`mailto:${email}`}>{email}</a></h5>
			</div>

			{/* Maybe have this? Not in use cases but can be useful to take up space
			<div className='course-people-container-lastactive'>
				<p>2/18 11:53pm</p>
			</div>
			*/}
		</div>
	);
}
