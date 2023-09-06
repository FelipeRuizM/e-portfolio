import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards() {

  let projects = [
    {
      name: "Inventory System",
      description: "Worked in an amazing team of three to develop from scratch a fully functional inventory system for Camosun College's Electronics Department.",
      link: "https://github.com/FelipeRuizM/inventory-system",
      technologies: 'Node.js Express.js React MySQL'
    },
    {
      name: "eCommerce Website",
      description: "An 'Amazon-like' website. It features a 'change currency' button, auto-complete addresses at checkout, Masonry Layout, and more.",  
      link: "https://github.com/FelipeRuizM/ecommerce-website",
      technologies: 'JQuery Bootstrap'
    },
    {
      name: "DCave",
      description: "For my final project in my Unity course, I teamed up with a friend to build a fun FPS medieval game. You'll find diverse enemies, sound effects, and a boss fight!",
      link: "https://github.com/FelipeRuizM/DCave",
      technologies: 'C# Unity'
    },
    {
      name: "Matryoshka Grid",
      description: "It's a local multiplayer Tic-Tac-Toe game with overlapping tokens. I thought the idea was original, but there's actually a game like that called Gobblet Gobblers.",
      link: "https://github.com/FelipeRuizM/MatryoshkaGrid",
      technologies: 'JavaScript p5'
    }
  ];

  return (
    <Row className="justify-content-md-center align-items-center">
      <Col className='col-lg-9'>
        <Row className="justify-content-md-center align-items-center" style={{ marginLeft: '1rem', marginRight: '2rem' }}>
          {projects.map((project, idx) => (
            <Col key={idx} className='col-lg-4 mt-3 ml-1'>
              <a href={project.link} style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                <Card style={{ width: '21rem' }} className='projects-card' >
                  <Card.Body>
                    <Card.Title className='style-text-main-color'>{project.name}</Card.Title>
                    <Card.Text className='style-text-text-color'>
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="style-text-sub-color">{project.technologies}</Card.Footer>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Cards;