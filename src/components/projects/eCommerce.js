import React from 'react';
import { Container, Col, Modal, Row, Image } from 'react-bootstrap';

export const ECommerce = ({ show, setShow }) => {

  const Introduction = () => (
    <Row>
      <Col xs={12} sm={12} lg={6}>

        <h2 className='style-text-main-color'>1. Introduction</h2>
        <p>The e-commerce website was my first JavaScript project. It uses the simple (but powerful) JavaScript library jQuery, the front-end framework Bootstrap, and multiple APIs. This project significantly enhanced my understanding of web development and provided hands-on experience in implementing interactive features.</p>

      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '100%' }}>
          <Image
            src={require('../../assets/images/ecommerce-example.png')}
            alt={"e-commerce screenshot"}
            className='img-fluid image-modal' rounded
          />
        </div>
      </Col>
    </Row>
  );

  const PlanDev = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>2. Plan & Development</h2>
        <p>The goal was to create a dynamic shopping experience akin to Amazon. I integrated an API to fetch product data, displaying it in a visually appealing Masonry layout for an engaging browsing experience.</p>
        <p>Recognizing global commerce, I added a currency customization feature. Users can view prices in their preferred currency, enhancing personalized interaction and understanding of the pricing structure.</p>
        <p>In e-commerce, a smooth checkout is crucial. I implemented stringent data validation during checkout to provide real-time feedback on entered information, reducing errors for a frustration-free transaction.</p>
        <p>Going further, I introduced an address autocomplete feature. This saves time and minimizes input errors during checkout, utilizing technology to suggest and complete addresses for a more efficient and user-centric shopping journey.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '100%' }}>
          <Image
            src={require('../../assets/images/ecommerce-modal.png')}
            alt={"Camosun College Logo"}
            className='img-fluid image-modal' rounded
          />
        </div>
      </Col>
    </Row>
  );

  const Results = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>3. Results</h2>
        <p>My Amazon-like website aims for a comprehensive, user-friendly platform prioritizing visual appeal, global accessibility, transaction accuracy, and overall efficiency in online shopping, exceeding user expectations.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        
      </Col>
    </Row>
  );

  const SourceCode = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>4. Source Code</h2>
        <p>You can check the project for yourself by <a className='link-effect' href='https://feliperuizm.github.io/ecommerce-website/' target="_blank" rel="noopener noreferrer">clicking here</a> or check the source code by <a className='link-effect' href='https://github.com/FelipeRuizM/ecommerce-website' target="_blank" rel="noopener noreferrer">clicking here</a>.</p>
      </Col>
    </Row>
  );

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen
        className='my-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>The e-commerce example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Introduction />
            <PlanDev />
            <Results />
            <SourceCode />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
