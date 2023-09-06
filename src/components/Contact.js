import { Row, Col } from "react-bootstrap";

export const Contact = () => {

  return (
    <section id='contact'>&zwnj;
      <Row className="justify-content-md-center align-items-center" id="contact-row">
        <Col className="col-lg-8 p-4">
          <h3 className="style-text-text-color display-4 text-start">
            <span className='style-text-sub-color'>3.</span> Contact</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center align-items-center">
        <Col className="col-lg-4">
          <h3 style={{marginTop: '3rem'}} className="style-text-main-color display-4">Get in Touch</h3>
          <p style={{marginBottom: '5rem'}} className="style-text-text-color">Hey, I'm currently looking for new opportunities. Even if you just have a question or wanna connect, please feel free to do so. I'm a nice guy, I swear! :D</p>
          <a id="contact-button" className="float-center" href="mailto: felipe.ruiz0011@gmail.com">Say Hello &gt;</a>
        </Col>
      </Row>
    </section>
  );
}