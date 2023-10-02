import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projects from '../assets/data/projects.json';

function Cards() {

  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} lg={4} className="d-flex">
            <Card className='projects-card flex-fill'>
              <Card.Body className="d-flex flex-column">
                <Card.Title className='style-text-main-color'>{project.name}</Card.Title>
                <Card.Text className='style-text-text-color flex-fill'>
                  {project.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="style-text-sub-color">{project.technologies}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;