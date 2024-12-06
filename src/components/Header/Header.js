import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const account = useSelector(state => state.users.account)
  const isAuthenticated = useSelector(state => state.users.isAuthenticated)

  console.log('account login' ,account);
  console.log('check account',isAuthenticated);
  
  
  const navigate = useNavigate(); // Sử dụng useNavigate thay cho useNavigation

  const handleLogin = () => {
    navigate('/login'); // Điều hướng đến trang login
  };
  const handleSignUp=()=>{
    navigate('/signup')
  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className='navbar-brand'>NhatThanh</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/users" className='nav-link'>User</NavLink>
            <NavLink to="/admin" className='nav-link'>Admin</NavLink>
            <NavLink to="/iot" className='nav-link'>IOT</NavLink>

    
          </Nav>
        <Nav>
          {
            isAuthenticated === false 
            ?
            <>
            <button className='btn-button btn-login'onClick={()=>handleLogin()}>Log In</button>
            <button className='btn-button btn-logout' onClick={()=>handleSignUp()}>Sign Up</button>
            
            </>
            :
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item >Log Out</NavDropdown.Item>
              <NavDropdown.Item >ProFile</NavDropdown.Item>
            </NavDropdown> 
            }
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;