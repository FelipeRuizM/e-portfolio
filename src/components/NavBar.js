import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getThemesName } from '../scripts/themeChanger';

export const NavBar = ({ theme, setTheme }) => {
  
  let themeNames = getThemesName();

  let prevScrollpos = window.scrollY;
  window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("my-navbar").style.top = "0";
    } else {
      document.getElementById("my-navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" id="my-navbar">
      <Container>
        <Navbar.Brand href="#home" id='fr-brand'><span className='style-text'>FR</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">
              <span className='style-text-sub-color'>1.</span> About</Nav.Link>
            <Nav.Link href="#projects">
              <span className='style-text-sub-color'>2.</span> Projects</Nav.Link>
            <Nav.Link href="#contact">
              <span className='style-text-sub-color'>3.</span> Contact</Nav.Link>
            <NavDropdown title={theme} id="basic-nav-dropdown">
              {themeNames.map((themeName) =>
                <NavDropdown.Item key={themeName} onClick={() => setTheme(themeName)}>{themeName}</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}