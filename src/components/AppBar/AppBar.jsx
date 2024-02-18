import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/Usermenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navigation />
        <Nav className="mr-auto">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
