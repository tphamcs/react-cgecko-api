import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

const Header = () => {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={'/'}>React Boostrap</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/'} style={{marginRight: "1em"}}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;