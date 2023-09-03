import { Row, Col } from "react-bootstrap";

export const Home = () => {

  return (
    <section id='home'>Toasty!
      <Row className="justify-content-md-center align-items-center" id="home-row">
        <Col className="col-lg-9 p-4">
          <h4 className="style-text-sub-color text-start">Hi, my name is</h4>
          <h1 className="style-text-main-color display-1 text-start">Felipe Ruiz.</h1>
          <h2 className="style-text-text-color display-1 text-start">I'm a Full-Stack Dev.</h2>
          <p className="text-start col-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat consectetur lectus ut mollis. Aenean at feugiat mauris, in lobortis nunc. Phasellus vitae sapien non est sollicitudin rutrum.</p>
          <a id="know-more-button" className="float-start" href="#about">Get to know me &gt;</a>
        </Col>
      </Row>
    </section>
  );
}