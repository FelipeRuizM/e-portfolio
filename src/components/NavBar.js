import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = ({theme, setTheme}) => {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" id="my-navbar">
      <Container>
        <Navbar.Brand href="#home">FR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Themes" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setTheme('aether')}>Aether</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('cyberspace')}>Cyberspace</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('dracula')}>Dracula</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('mexican')}>Mexican</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('pink-lemonade')}>Pink-Lemonade</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('retrocast')}>Retrocast</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('shadow')}>Shadow</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}