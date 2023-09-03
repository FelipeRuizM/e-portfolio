import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getThemesName } from '../scripts/themeChanger';

export const NavBar = ({ setTheme }) => {
  
  let themeNames = getThemesName();
  console.log(themeNames);

  var prevScrollpos = window.scrollY;
  window.onscroll = () => {
    var currentScrollPos = window.scrollY;

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
            <Nav.Link href="#home">
              <span className='style-text-sub-color'>1.</span> Home</Nav.Link>
            <Nav.Link href="#projects">
              <span className='style-text-sub-color'>2.</span> Projects</Nav.Link>
            <Nav.Link href="#skills">
              <span className='style-text-sub-color'>3.</span> Skills</Nav.Link>
            <Nav.Link href="#about">
              <span className='style-text-sub-color'>4.</span> About</Nav.Link>
            <Nav.Link href="#contact">
              <span className='style-text-sub-color'>5.</span> Contact</Nav.Link>
            <NavDropdown title="Themes" id="basic-nav-dropdown">
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