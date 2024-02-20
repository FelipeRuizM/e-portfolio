import Card from 'react-bootstrap/Card';
import { Container, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projects from '../assets/data/projects.json';
import { useState } from 'react';

function Cards() {

  const [show, setShow] = useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
      <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} lg={4} className="d-flex">
            <Card className='projects-card flex-fill'>
              <a className='stretched-link' href={project.link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className='style-text-main-color'>{project.name}</Card.Title>
                  <Card.Text className='style-text-text-color flex-fill'>
                    {project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="style-text-sub-color">{project.technologies}</Card.Footer>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default Cards;