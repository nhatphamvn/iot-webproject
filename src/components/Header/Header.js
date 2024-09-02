import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pham Van Nhat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/users" className='nav-link'>User</Link>
            <Link to="/admin" className='nav-link'>Admin</Link>
          

    
          </Nav>
        <Nav>
            <NavDropdown title="Sign In/Sigh Out" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ProFile</NavDropdown.Item>
            </NavDropdown>
            
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;