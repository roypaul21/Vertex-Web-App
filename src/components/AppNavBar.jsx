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
            <li><a className="font--link nav-link" id='business-division-link'>Business Division</a>
              <ul id='submenu' className='row m-0 px-5 pt-md-4'>
                <Link to="/sales-division" className='col-12 col-md-4 m-0 p-0 align-items-center justify-content-center d-flex submenu-link' id='sales-link'>
                  <h3>Sales Division</h3>
                </Link>
                <Link as={Link} to="/engineer-division" className='col-12 col-md-4 m-0 p-0 align-items-center justify-content-center d-flex submenu-link' id='engine-link'>
                  <h3>Engineering Division</h3>
                </Link>
                <Link  as={Link} to="/project-division" className='col-12 col-md-4 m-0 p-0 align-items-center justify-content-center d-flex submenu-link' id='project-link'>
                  <h3>Project Division</h3>
                </Link>      
              </ul>
            </li>
            {/* <Link id='business-division-link' className="font--link nav-link">Business Division</Link> */}
            <Link to="/reference" className="font--link nav-link">Reference</Link>
            <Link to="/partners" className="font--link nav-link">Partners</Link>
            <Link to="/contact" className="font--link nav-link">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
