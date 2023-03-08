import { Container } from 'react-bootstrap';

export default function Classpeople() {
	return (
		<>
		<div className='course-people-main-div'>
			<div id='course-people-header'>
				<h3>People</h3>
			</div>

			<div className='course-people-container'>
				<div className='course-people-container-namerole-div'>
					<div className='course-people-container-name'>
						<h4>Firstname Lastname</h4>
					</div>
					<div className='course-people-container-role'>
						<p>Student</p>
					</div>
				</div>
				<div className='course-people-container-email'>
					<h5><a href='#' >firstnamelastname@oakland.edu</a></h5>
				</div>

				{/* Maybe have this? Not in use cases but can be useful to take up space
				
				<div className='course-people-container-lastactive'>
					<p>2/18 11:53pm</p>
				</div>
				*/}
			</div>




		</div>

		</>
		);
	}