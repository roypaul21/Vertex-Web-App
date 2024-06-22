import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5 pt-5" id="app-nav-bar" fixed='top'>
      <Container>
        <Navbar.Brand href="/ ">
          <img src="/images/logo.png" alt="Vertex" width={280} height={80}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id='nav-bar-link-container'>
            <Nav.Link to="/about-us" className='font--link'>About Us</Nav.Link>
            <NavDropdown title="Business Division" className='font--link' id="basic-nav-dropdown">
              <NavDropdown.Item href="/sales-division">Sales Division</NavDropdown.Item>
              <NavDropdown.Item href="/engineer-division">Engineer Division</NavDropdown.Item>
              <NavDropdown.Item href="/project-division">Project Division</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/reference" className='font--link'>Reference</Nav.Link>
            <Nav.Link to="/partners" className='font--link'>Partners</Nav.Link>
            <Nav.Link to="/contact" className='font--link'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
