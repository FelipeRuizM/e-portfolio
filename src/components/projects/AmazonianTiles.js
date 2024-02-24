import React from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

export const AmazonianTiles = ({ show, setShow }) => {

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen
        className='my-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Amazonian Tiles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p>You can check the project for yourself by <a className='link-effect' href='https://feliperuizm.github.io/amazonian-tiles/' target="_blank" rel="noopener noreferrer">clicking here</a> or check the source code by <a className='link-effect' href='https://github.com/FelipeRuizM/amazonian-tiles' target="_blank" rel="noopener noreferrer">clicking here</a>.</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
