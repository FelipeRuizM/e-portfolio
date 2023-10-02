import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getThemesName } from '../scripts/themeChanger';
import sections from '../assets/data/sections.json';

export const NavBar = ({ theme, setTheme }) => {

  const SectionLink = ({section, index}) => (
    <Nav.Link href={'#' + section}>
      <span className='style-text-sub-color'>{index + 1}.</span> {section.charAt(0).toUpperCase() + section.slice(1)}</Nav.Link>
  );

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
        <Navbar.Brand href="#home" id='fr-brand'><span id='logo-font'>FR</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {sections.map((section, index) => (
              <SectionLink key={section} section={section} index={index} />
            ))}
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