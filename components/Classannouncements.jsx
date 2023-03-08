import { Container } from 'react-bootstrap';

export default function Classannouncements() {
	return (
		<>
		<div id='course-ann-main-div'>
			<div className="course-ann-header">
				<h3 className="course-ann-header">Announcements</h3>
			</div>

			<Container className='course-ann-container'>
				<div className="course-ann-main-box">
					<div className='course-ann-title-prev-box'>
						<div className='course-ann-title-auth-box'>
							<h4 className="course-ann-box-title">Announcement Title</h4>
							<h5 className="course-ann-box-author">Author Name</h5>
						</div>
						<h8 className="course-ann-box-prev">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							Part of Announcement, not the whole thing.
						</h8>
					</div>
					


				</div>
			</Container>
		</div>

		</>
		);
	}