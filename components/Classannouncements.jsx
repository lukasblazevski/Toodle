import { Container } from 'react-bootstrap';

export default function Classannouncements() {
	return (
		<>
		<div id='class-ann-main-div'>
			<div className="class-ann-header">
				<h3 className="class-ann-header">Announcements</h3>
			</div>

			<Container className='class-ann-container'>
				<div className="class-ann-main-box">
					<div className='class-ann-title-prev-box'>
						<div className='class-ann-title-auth-box'>
							<h4 className="class-ann-box-title">Announcement Title</h4>
							<h5 className="class-ann-box-author">Author Name</h5>
						</div>
						<h8 className="class-ann-box-prev">
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