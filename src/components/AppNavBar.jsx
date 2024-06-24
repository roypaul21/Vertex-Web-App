import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5" id="app-nav-bar" fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/images/logo.png" alt="Vertex" width={280} height={80} className='img-fluid'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id='nav-bar-link-container'>
            <Link to="/about-us" className="font--link nav-link">About Us</Link>
            <NavDropdown title="Business Division" className='font--link' id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sales-division">Sales Division</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineer-division">Engineer Division</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project-division">Project Division</NavDropdown.Item>
            </NavDropdown>
            <Link to="/reference" className="font--link nav-link">Reference</Link>
            <Link to="/partners" className="font--link nav-link">Partners</Link>
            <Link to="/contact" className="font--link nav-link">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
