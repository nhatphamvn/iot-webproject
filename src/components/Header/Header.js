import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const Header=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className='navbar-brand'>Pham Van Nhat</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/users" className='nav-link'>User</NavLink>
            <NavLink to="/admin" className='nav-link'>Admin</NavLink>
          

    
          </Nav>
        <Nav>
          <button className='btn-button btn-login'>Log In</button>
          <button className='btn-button btn-logout'>Sign Up</button>
            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item >Sign In</NavDropdown.Item>
              <NavDropdown.Item >Sign Out</NavDropdown.Item>
              <NavDropdown.Item >ProFile</NavDropdown.Item>
            </NavDropdown> */}
            
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;