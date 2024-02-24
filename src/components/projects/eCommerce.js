import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';

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
          <Row>
            <Col>
              <p>To access the source code of this project <a className='link-effect' href='https://github.com/FelipeRuizM/ecommerce-website' target="_blank" rel="noopener noreferrer">click here</a></p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

