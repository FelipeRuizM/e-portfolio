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
          <h4 className="style-text-sub-color text-start">Hi, my name is</h4>
          <h1 className={firstNameClassName}>Felipe Ruiz.</h1>
          <h2 className="style-text-text-color display-1 text-start">I'm a Full-Stack Dev.</h2>
          <p className="text-start col-8">I'm a software developer that loves building exceptional things. Currently, I'm focused on getting a job in my area and develop my skills even further.</p>
          <a id="know-more-button" className="float-start" href="#about">Get to know me &gt;</a>
        </Col>
      </Row>
    </section>
  );
}