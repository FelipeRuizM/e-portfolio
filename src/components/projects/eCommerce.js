import React from 'react';
import { Container, Col, Modal, Row, Image } from 'react-bootstrap';

export const ECommerce = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen
        className='my-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>The e-commerce</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} sm={12} lg={6}>
                <h2 className='style-text-main-color'>First JavaScript Project</h2>

                <p>The e-commerce website was my first JavaScript project. It uses the simple (but powerful) JavaScript library jQuery, the front-end framework Bootstrap, and multiple APIs. This project significantly enhanced my understanding of web development and provided hands-on experience in implementing interactive features.</p>
                <p>The idea was to build an Amazon-like website that displays products from an API in a Mansory layout, allows the user to change the currency, and validates the data in the checkout. I took it a step further and added an address autocomplete feature that I'm really proud of.</p>
                <p>You can check the project for yourself by <a className='link-effect' href='https://feliperuizm.github.io/ecommerce-website/' target="_blank" rel="noopener noreferrer">clicking here</a> or check the source code by <a className='link-effect' href='https://github.com/FelipeRuizM/ecommerce-website' target="_blank" rel="noopener noreferrer">clicking here</a>.</p>
              </Col>
              <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
                <div style={{ maxWidth: '100%' }}>
                  <Image
                    src={require('../../assets/images/ecommerce-example.png')}
                    alt={"Camosun College Logo"}
                    className='img-fluid image-modal' rounded
                    onMouseOver={e => e.currentTarget.src = require('../../assets/images/ecommerce-modal.png')}
                    onMouseOut={e => (e.currentTarget.src = require('../../assets/images/ecommerce-example.png'))}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
