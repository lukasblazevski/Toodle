
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';


export default function CustomNav() {
	return (
		
			<Navbar bg="light" expand="lg">
			  <Container id="nav-container">

				<Navbar.Brand><a><img id="navbar-toodle-logo" src="favicon.ico"/> </a></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				
				<Navbar.Collapse id="basic-navbar-nav">
				  <Nav className="me-auto">
					<NavDropdown title="Current Classes" id="basic-nav-dropdown">
					  <NavDropdown.Item>Class 1</NavDropdown.Item>
					  <NavDropdown.Item>Class 2</NavDropdown.Item>
					  <NavDropdown.Item>Class 3</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#nysail">MySail</Nav.Link>
					<Nav.Link href="#helpdesk">Get Help</Nav.Link>
				  </Nav>
				</Navbar.Collapse>
			  </Container>

				<div id="navbar-right-adjust">
					<Navbar.Collapse id="basic-navbar-nav">
						<div id="profile-photo-nav">
						<Nav className="ms-auto"  >
							<NavDropdown id="basic-nav-dropdown" title={<img id="profile-photo" src="default_user_profile.svg" alt="user pic"/>}>
								<NavDropdown.Item href="#preferences">Preferences</NavDropdown.Item>
								<NavDropdown.Item href="logout">Logout</NavDropdown.Item>
							</NavDropdown>
					</Nav>
					</div>
					</Navbar.Collapse>
					
					<div id="OU-logo-div">
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav>
								<img id="OU-logo" src="OU_dark.svg"/>
							</Nav>	
						</Navbar.Collapse>
					</div>
				</div>
		
			</Navbar>
	);
}