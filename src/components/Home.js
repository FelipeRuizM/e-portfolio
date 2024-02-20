import { Row, Col } from "react-bootstrap";
import { getThemesName } from '../scripts/themeChanger';

export const Home = ({ theme, setTheme }) => {

  const randomTheme = () => {
    const themeNames = getThemesName();
    let randomTheme;
    do {
      randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
      if (theme === randomTheme) {
      }
    } while (theme === randomTheme);
    setTheme(randomTheme);
  }

  let firstNameClassName = '';

  if (theme === 'chaos theory') {
    firstNameClassName = 'style-text-main-color display-1 text-end inverted-text'
  } else {
    firstNameClassName = 'style-text-main-color display-1 text-start'
  }

  return (
    <section id='home'>Toasty!
      <Row className="justify-content-md-center align-items-center" id="home-row">
        <Col className="col-lg-9 p-4">
          <h4 className="style-text-sub-color text-start">Hey, my name is</h4>
          <h1 className={firstNameClassName}>Felipe Ruiz.</h1>
          <h2 className="style-text-text-color display-1 text-start">I'm a Full-Stack Dev.</h2>
          <p className="text-start col-8">My main goal at the moment is to find a job in my field and keep improving my skills. And hey, this is a customizable e-portfolio, which means you can pick your preferred theme by clicking on the navbar dropdown or try your luck with this button!</p>
          <div id="random-theme-button" className="float-start" onClick={randomTheme}>change theme &gt;</div>
        </Col>
      </Row>
    </section>
  );
}