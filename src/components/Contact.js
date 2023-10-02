import { Row, Col } from "react-bootstrap";
import { SectionHeading } from "./SectionHeading";

export const Contact = () => {

  return (
    <section id='contact'>&zwnj;
      <SectionHeading index={3} heading={'Contact'} />
      <Row className="justify-content-md-center align-items-center">
        <Col className="col-lg-4 p-5">
          <h3 style={{marginTop: '3rem'}} className="style-text-main-color display-4">Let's Talk</h3>
          <p style={{marginBottom: '5rem'}} className="style-text-text-color">I'm ready for new adventures and currently looking for opportunities. Even if you just have a question or want to connect, please feel free to do so. I'm a nice guy, I swear! :D</p>
          <a id="contact-button" className="float-center" href="mailto: felipe.ruiz0011@gmail.com">Reach Out &gt;</a>
        </Col>
      </Row>
    </section>
  );
}