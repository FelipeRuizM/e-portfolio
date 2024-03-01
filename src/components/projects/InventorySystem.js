import React from 'react';
import { Col, Container, Image, Modal, Row } from 'react-bootstrap';

export const InventorySystem = ({ show, setShow }) => {

  const Introduction = () => (
    <Row>
      <Col xs={12} sm={12} lg={6}>

        <h2 className='style-text-main-color'>1. Introduction</h2>

        <p>The Inventory System is an app built using <span className='style-text-main-color'>React, Node.js, Express.js, and MySQL</span> for Camosun College to assist lab assistants in organizing and keeping track of thousands of electronic items. My team and I had three months to accomplish this task, and initially, it seemed like an impossible challenge. However, we were ready to face it and give our best.</p>

        <p>Comprising three students, Team Elex Sapphire created an amazing product that assists lab assistants and countless students in saving a significant amount of time. Our app makes it easy for lab assistants to find things quickly, and students no longer need to go all the way to the labs to inquire about the availability of certain equipment, they can simply check the app.</p>

      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '75%' }}>
          <Image
            src={require('../../assets/images/camosun.png')}
            alt={"Camosun College Logo and Team Photo"}
            className='img-fluid image-modal' rounded
            onMouseOver={e => e.currentTarget.src = require('../../assets/images/team-photo.png')}
            onMouseOut={e => (e.currentTarget.src = require('../../assets/images/camosun.png'))}
          />
        </div>
      </Col>
    </Row>
  );

  const PlanDev = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>2. Plan & Development</h2>
        <p>At the beginning of the project, we needed to decide which technologies were going to be used. We all agreed on using React for the frontend, while Node.js and Express.js were chosen to power the API. The database component was seamlessly integrated using MySQL.</p>
        <p>This strategic technology stack provided a cohesive and efficient foundation for developing the Inventory System, ensuring compatibility, scalability, and optimal performance throughout the project's lifecycle.</p>
        <p>With the selected technologies, we needed to decide each team member's responsibilities. I was tasked with designing the database and the API, as well as developing and documenting both. We employed agile methodologies to monitor our progress, conducting daily meetings and bi-weekly sessions with our clients.</p>
        <p>As development progressed, a challenge emerged when I encountered the need for an Object-Relational Mapping (ORM) tool for MySQL, a technology I had not previously utilized. Collaborating with my team, we identified Sequelize as the optimal solution, and I swiftly acquired proficiency in this library within a few days. This adaptive approach allowed for a seamless continuation of API development.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <div style={{ maxWidth: '75%' }}>
          <Image
            src={require('../../assets/images/diagram.png')}
            alt={"Diagram of the project and Agile Diagram"}
            className='img-fluid image-modal' rounded
            onMouseOver={e => e.currentTarget.src = require('../../assets/images/agile.png')}
            onMouseOut={e => (e.currentTarget.src = require('../../assets/images/diagram.png'))}
          />
        </div>
      </Col>
    </Row>
  );

  const Results = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>3. Results</h2>
        <p>Here's is a demo of what the system is capable of:</p>
        <h4 className='style-text-sub-color'>Student Login</h4>
        <p>As a student, you only have access to view available items. The admin is the only user authorized to access other tabs.</p>
        <h4 className='style-text-sub-color'>Items Tab</h4>
        <p>Displays the name, status, quantity, and place of the items. Only the admin can sign out, add, modify, or delete items.</p>
        <h4 className='style-text-sub-color'>Sign out Tab</h4>
        <p>Shows which items are being signed out of the lab, and identifies the borrower. The expected return date is optional.</p>
        <h4 className='style-text-sub-color'>Carts Tab</h4>
        <p>Carts are designed for classes that frequently use specific items. Instead of being assigned to a student, they are assigned to a lab and a course.</p>
        <h4 className='style-text-sub-color'>Returns Tab</h4>
        <p>Shows which items are not in the room and allows the admin to sign them back in.</p>
        <h4 className='style-text-sub-color'>Checkout Records</h4>
        <p>The system maintains a history of previous sign-outs, all listed here.</p>
        <h4 className='style-text-sub-color'>Labs</h4>
        <p>A list of all the labs and courses.</p>
      </Col>
      <Col className="d-flex justify-content-lg-end justify-content-sm-center" xs={12} sm={12} lg={6}>
        <video width="75%" height="auto" controls>
          <source src={require("../../assets/videos/inventory-demo-fast.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Col>
    </Row>
  );

  const SourceCode = () => (
    <Row className='mt-4'>
      <Col xs={12} sm={12} lg={6}>
        <h2 className='style-text-main-color'>4. Source Code</h2>
        <p>Feel free to <a className='link-effect' href='https://github.com/FelipeRuizM/inventory-system' target="_blank" rel="noopener noreferrer">click here</a> to review the source code for this project.</p>
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
        <Modal.Header closeButton className='border-0'>
          <Modal.Title className='style-text-sub-color'>
            The Inventory System Project
          </Modal.Title>
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