import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const basePath = '/react-cgecko-api'
  
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={`${basePath}/`}>React Boostrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`${basePath}/`}>Home</Nav.Link>
            <Nav.Link href={`${basePath}/`}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;