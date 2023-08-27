import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import instagramIcon from '../assets/img/instagram-icon.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScroled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroled(true);
      } else {
        setScroled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt={'Felipe Ruiz'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* 
              TRY CHANGING THE CLASS NAME ACTIVE LINK LOGIC A LIL BIT! 
            */}
            <Nav.Link href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-miscellaneous'>
            <div className='social-icons'>
              <a href='https://www.linkedin.com/in/felipe-ruiz0011/' target="_blank">
                <img src={linkedinIcon} alt={'LinkedIn'} /></a>
              <a href='https://github.com/FelipeRuizM?tab=repositories' target="_blank">
                <img src={githubIcon} alt={'GitHub'} /></a>
              <a href='https://www.instagram.com/feh_ruiz/' target="_blank">
                <img src={instagramIcon} alt={'Instagram'} /></a>
            </div>
            <button className='connect-button' onClick={() => console.log('connect button pressed')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}