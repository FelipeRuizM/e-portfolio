import React from 'react';
import { Row, Col, Modal, Image, Container } from 'react-bootstrap';

export const DCave = ({ show, setShow }) => {

  const Introduction = () => (
    <Row>
      <Col xs={12} sm={12} lg={6}>

        <h2 className='style-text-main-color'>1. Introduction</h2>
        <p>DCave is a medieval FPS like game made in <span className='style-text-main-color'>Unity</span>. In the game, you are a warrior that uses a bow and arrow to shoot enemies and have to collect keys to unlock doors and defeat the final boss!</p>
        <p>This game was made by me and my friend Diego as our final project for our Unity Class. In this game, we applied concepts like: physics, lighting, animations, UI, Colliders, and many others.</p>

      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '75%' }}>
          <Image
            src={require('../../assets/images/dcave-menu.png')}
            alt={"DCave Menu & Pause"}
            className='img-fluid image-modal' rounded
            onMouseOver={e => e.currentTarget.src = require('../../assets/images/dcave-pause.png')}
            onMouseOut={e => (e.currentTarget.src = require('../../assets/images/dcave-menu.png'))}
          />
        </div>
      </Col>
    </Row>
  );

  const PlanDev = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>2. Plan & Development</h2>
        <p>At the beginning of this project, we were not really sure of what we wanted as a final result. All we knew was that we wanted a Dungeon-like game with a low poly style. So, after a bit of research, me and my friend came up with this idea of a bow and arrow warrior and an epic boss fight.</p>
        <p>We built the map together, using this <a className='link-effect' href='https://assetstore.unity.com/packages/3d/environments/dungeons/ultimate-low-poly-dungeon-143535' target="_blank" rel="noopener noreferrer">unity asset</a> and we were ready to start working on our tasks. I was responsible to build the character, little enemies, sound effects, animations, and Diego was for the boss fight, and menu of the game.</p>
        <p>I started with the simple stuff, such as player movement and player camera. Then I was ready to start what was the biggest challenge of the project, the bow and arrow. My idea was: the more you charge the arrow, the more damage its going to deal. That was actually easy to do, the hardest part was to make the arrow charge <b>with</b> the bow. This feature can be a bit buggy, but it's there!</p>
        <p>After working on the shooting part of the game, I was ready to make the enemies. The idea was to add something that wasn't very hard, but it was fun at the same time. So, I added 3 little skeletons with swords. Their speed is adjustable in the settings of the game, if you want to challenge yourself, pick diffulty 10.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
      <div style={{ maxWidth: '75%' }}>
          <Image
            src={require('../../assets/images/dcave-over.png')}
            alt={"Camosun College Logo"}
            className='img-fluid image-modal' rounded
            onMouseOver={e => e.currentTarget.src = require('../../assets/images/dcave-key.png')}
            onMouseOut={e => (e.currentTarget.src = require('../../assets/images/dcave-over.png'))}
          />
        </div>
      </Col>
    </Row>
  );

  const Results = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>3. Results</h2>
        <p>Here's a sample gameplay of DCave (To be recorded soon!)</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>

      </Col>
    </Row>
  );

  const SourceCode = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>4. Source Code</h2>
        <p>To access the source code of this project <a className='link-effect' href='https://github.com/FelipeRuizM/DCave' target="_blank" rel="noopener noreferrer">click here</a></p>
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
          <Modal.Title>DCave</Modal.Title>
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