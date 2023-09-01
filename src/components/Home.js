import { Row, Col } from "react-bootstrap";

export const Home = () => {

  return (
    <section id='home'>
      <Row className="justify-content-md-center">
        <Col className="col-lg-9 mt-5 p-4">
          <h4 className="style-text-sub-color text-start">Hi, my name is</h4>
          <h1 className="style-text-main-color display-1 text-start">Felipe Ruiz.</h1>
          <h2 className="style-text-text-color display-1 text-start">I'm a Full-Stack Dev.</h2>
          <p className="h4"></p>
        </Col>
      </Row>
    </section>
  );
}