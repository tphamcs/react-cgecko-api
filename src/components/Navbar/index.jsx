import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

const Header = () => {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>React Boostrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;