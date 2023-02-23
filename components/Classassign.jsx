import { Container } from 'react-bootstrap';

export default function Classassign() {
	return (
		<>
		<div id='class-assign-main-div'>
			<div className="class-assign-header">
				<h3 className="class-assign-header">Assignments</h3>
			</div>

			<div className='class-assign-container'>
				<div className='class-assign-container-name'>
					<h4> <a className='class-assign-container-name-link' href="#">Assignment Title</a></h4>
				</div>
				<div className='class-assign-container-description'>
					<h8>Assignment description, no more than 15 words long</h8>
				</div>

				<div className='class-assign-container-due-static'>
					<h8></h8>
				</div>

				<div className='class-assign-container-due-stack'>
					<div className='class-assign-container-due'>
						<h8>Feburary 8th at 11:59pm</h8>
					</div>
					<div className='class-assign-container-remaining'>
						<h8>12 hours remaining</h8>
					</div>
				</div>
				



			</div>




		</div>

		</>
		);
	}