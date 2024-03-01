import React from 'react';
import { Row, Col, Modal, Image, Container } from 'react-bootstrap';

export const EPortfolio = ({ show, setShow }) => {

  const Introduction = () => (
    <Row>
      <Col xs={12} sm={12} lg={6}>

        <h2 className='style-text-main-color'>1. Introduction</h2>
        <p>I started my portfolio after finishing college at Camosun, needing a place to show off what I've done. As I worked on it, I saw it could be more than just a display. It became a way to tell my story, from my first projects to where I am now.</p>
        <p>I built my ePortfolio using <span className='style-text-main-color'>React and Node.js</span>, making it a bit more personalized. Looking back, what started as a simple need turned into a big part of my career. My portfolio tells the story of where I started and where I'm heading, keeping me motivated to do even better in my field.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '75%' }}>
          <Image
            src={require('../../assets/images/eportfolio-home.png')}
            alt={"DCave Menu & Pause"}
            className='img-fluid image-modal' rounded
            onMouseOver={e => e.currentTarget.src = require('../../assets/images/eportfolio-chaos.png')}
            onMouseOut={e => (e.currentTarget.src = require('../../assets/images/eportfolio-home.png'))}
          />
        </div>
      </Col>
    </Row>
  );

  const PlanDev = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>2. Plan & Development</h2>
        <p>TBD</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '75%' }}>
          <Image
            src={require('../../assets/images/eportfolio-chaos.png')}
            alt={"Camosun College Logo"}
            className='img-fluid image-modal' rounded
            onMouseOver={e => e.currentTarget.src = require('../../assets/images/eportfolio-home.png')}
            onMouseOut={e => (e.currentTarget.src = require('../../assets/images/eportfolio-chaos.png'))}
          />
        </div>
      </Col>
    </Row>
  );

  const Results = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>3. Results</h2>
        <p>Results are literally what you are accessing right now! If you have any ideas or just want to say something about the portfolio, just send me an email, I would love to hear from you.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>

      </Col>
    </Row>
  );

  const SourceCode = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>4. Source Code</h2>
        <p>To access the source code of this project <a className='link-effect' href='https://github.com/FelipeRuizM/e-portfolio' target="_blank" rel="noopener noreferrer">click here</a></p>
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
          <Modal.Title>E-Portfolio</Modal.Title>
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