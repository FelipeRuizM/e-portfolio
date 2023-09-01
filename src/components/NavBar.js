import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = ({ setTheme }) => {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" id="my-navbar">
      <Container>
        <Navbar.Brand href="#home" id='fr-brand'><span className='style-text'>FR</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <span className='style-text-sub-color'>1.</span> Home</Nav.Link>
            <Nav.Link href="#skills">
              <span className='style-text-sub-color'>2.</span> Skills</Nav.Link>
            <Nav.Link href="#projects">
              <span className='style-text-sub-color'>3.</span> Projects</Nav.Link>
            <Nav.Link href="#about">
              <span className='style-text-sub-color'>4.</span> About</Nav.Link>
            <Nav.Link href="#contact">
              <span className='style-text-sub-color'>5.</span> Contact</Nav.Link>
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