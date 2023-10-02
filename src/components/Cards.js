import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
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
    },
    {
      name: "Tetris",
      description: "A recreation of the famous game Tetris. While creating this game, I had the opportunity to put into practice what I was learning during my C++ classes.",
      link: "https://github.com/FelipeRuizM/tetris",
      technologies: 'C++ SFML'
    },
    {
      name: "ePortfolio",
      description: "Are you asking yourself how I built this? Well, it's not a mystery since this is an open-source ePortfolio; you can check every line of code on my GitHub.",
      link: "https://github.com/FelipeRuizM/e-portfolio",
      technologies: 'React Node.js'
    }
  ];

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