import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={'/'}>React Boostrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to={''}>Home</Nav.Link>
            <Nav.Link to={''}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;