import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {

  return (
    <section id='home'>
      <Container>
        <Row className="home-container">
          <Col sm={7}>Text</Col>
          <Col sm={5}>Image</Col>
        </Row>
      </Container>
    </section>
  );
}