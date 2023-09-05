import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards() {
  return (
    <Row className="justify-content-md-center align-items-center">
      <Col className='col-lg-9'>
        <Row className="justify-content-md-center align-items-center" style={{marginLeft: '1rem', marginRight: '2rem'}}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx} className='col-lg-4 mt-3 ml-1'>
              <Card style={{ width: '21rem' }} className='projects-card'>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Cards;