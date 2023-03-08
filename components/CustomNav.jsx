import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from 'react';
import DataContext from 'lib/DataContext';
import api from 'lib/api';

export default function CustomNav() {
	const { user, courses } = useContext(DataContext);

	if (!user) {
		return (
			<Navbar bg="light" expand="lg">
				<Container id="nav-container">
					<Navbar.Brand>
						<a href="/"><img id="navbar-toodle-logo" src="/favicon.ico" /> </a>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</Container>

				<div id="navbar-right-adjust">
					<div id="OU-logo-div">
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav>
								<img id="OU-logo" src="/OU_dark.svg" />
							</Nav>
						</Navbar.Collapse>
					</div>
				</div>
			</Navbar>
		);
	}

	return (
		<Navbar bg="light" expand="lg">
			<Container id="nav-container">
				<Navbar.Brand>
					<a href="/"><img id="navbar-toodle-logo" src="/favicon.ico" /> </a>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Current Courses" id="basic-nav-dropdown" disabled={courses.length === 0}>
							{courses.map(course => (
								<NavDropdown.Item href={`/course/${course.id}`} key={course.id}>
									{course.id} - {course.name}
								</NavDropdown.Item>
							))}
						</NavDropdown>
						<Nav.Link href="#mysail">MySail</Nav.Link>
						<Nav.Link href="#helpdesk">Get Help</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>

			<div id="navbar-right-adjust">
				<Navbar.Collapse id="basic-navbar-nav">
					<div id="profile-photo-nav">
						<Nav className="ms-auto">
							<NavDropdown id="basic-nav-dropdown" title={<img id="profile-photo" src="/default_user_profile.svg" alt="user pic"/>}>
								<NavDropdown.Item href="#preferences">Preferences</NavDropdown.Item>
								<NavDropdown.Item
									onClick={async () => {
										await api.delete('/session');

										if (!confirm('Are you sure you want to sign out?')) {
											return;
										}

										location.reload();
									}}
								>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</div>
				</Navbar.Collapse>

				<div id="OU-logo-div">
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<img id="OU-logo" src="/OU_dark.svg" />
						</Nav>
					</Navbar.Collapse>
				</div>
			</div>
		</Navbar>
	);
}
