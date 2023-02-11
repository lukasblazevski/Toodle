
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
				
			  </Container>

				<div id="navbar-right-adjust">
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