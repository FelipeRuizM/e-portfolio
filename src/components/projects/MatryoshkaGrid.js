import React from 'react';
import { Container, Image, Row, Col, Modal } from 'react-bootstrap';

export const MatryoshkaGrid = ({ show, setShow }) => {

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen
        className='my-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Super Tic-Tac-Toe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Row>
              <Col xs={12} sm={12} lg={6}>
                <h2 className='style-text-main-color'>Playing with p5</h2>
                <p>This project was from when I was learning how to code and just having fun with the <span className='style-text-main-color'>p5</span> library, so I decided to build a more complex version of tic-tac-toe with overlapping circles.</p>
                <p>Unfortunately, the project is unfinished and has a few bugs, but it is still a fun game to play with a friend. Perhaps, in the future, there may be updates and refinements to enhance the overall experience.</p>
                <p>You can play the game for yourself by <a className='link-effect' href='https://feliperuizm.github.io/MatryoshkaGrid/' target="_blank" rel="noopener noreferrer">clicking here</a> or check the source code by <a className='link-effect' href='https://github.com/FelipeRuizM/MatryoshkaGrid' target="_blank" rel="noopener noreferrer">clicking here</a>.</p>
              </Col>
              <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
                <div style={{ maxWidth: '100%' }}>
                  <Image
                    src={require('../../assets/images/matryoshka.png')}
                    alt={"Camosun College Logo"}
                    className='img-fluid image-modal' rounded
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

