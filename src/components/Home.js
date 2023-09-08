import { Row, Col } from "react-bootstrap";

export const Home = theme => {

  theme = theme.theme;// get theme name from theme obj

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
          <p className="text-start col-8">This is a customizable e-portfolio, which means you can pick your preferred theme by clicking on the navbar dropdown. Right now, my main goal is to find a job in my field and keep improving my skills.</p>
          <a id="know-more-button" className="float-start" href="#about">A little about me &gt;</a>
        </Col>
      </Row>
    </section>
  );
}