import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projects from '../assets/data/projects.json';
import { useState } from 'react';
import { DCave } from './projects/DCave';
import { ECommerce } from './projects/eCommerce';
import { EPortfolio } from './projects/ePortfolio';
import { InventorySystem } from './projects/InventorySystem';
import { MatryoshkaGrid } from './projects/MatryoshkaGrid';
import { Tetris } from './projects/Tetris';
import { getProjectsNames } from '../scripts/getProjectsName';
import { AmazonianTiles } from './projects/AmazonianTiles';

function Cards() {

  const [showDCave, setShowDCave] = useState(false);
  const [showECommerce, setShowECommerce] = useState(false);
  const [showEPortfolio, setShowEPortfolio] = useState(false);
  const [showInventorySystem, setShowInventorySystem] = useState(false);
  const [showMatryoshkaGrid, setShowMatryoshkaGrid] = useState(false);
  const [showTetris, setShowTetris] = useState(false);
  const [showAmazonianTiles, setShowAmazonianTiles] = useState(false);

  const emphasizedIndex = 0;

  const handleCardClick = project => {
    const projects = getProjectsNames();
    switch (project) {
      case projects[0]:
        setShowInventorySystem(true);
        break;
      case projects[1]:
        setShowECommerce(true);
        break;
      case projects[2]:
        setShowDCave(true);
        break;
      case projects[3]:
        setShowMatryoshkaGrid(true);
        break;
      case projects[4]:
        setShowTetris(true);
        break;
      case projects[5]:
        setShowEPortfolio(true);
        break;
      case projects[6]:
        setShowAmazonianTiles(true);
        break;
      default:
        break;
    }
  }

  const ProjectCard = ({ name, description, technologies, index }) => (
    <Col key={index} xs={12} sm={index === emphasizedIndex ? 12 : 6} lg={index === emphasizedIndex ? 12 : 4} className="d-flex">
      <Card className={'projects-card flex-fill'}>
        <div className='stretched-link' style={{ textDecoration: 'none' }} onClick={() => handleCardClick(name)}>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='style-text-main-color'>&lt; {name} /&gt;</Card.Title>
            <Card.Text className='style-text-text-color flex-fill'>
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="style-text-sub-color">{technologies}</Card.Footer>
        </div>
      </Card>
    </Col>
  );

  return (
    <>
      <Container>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard {...project} index={index} />
          ))}
        </Row>
      </Container>
      <DCave show={showDCave} setShow={setShowDCave} />
      <ECommerce show={showECommerce} setShow={setShowECommerce} />
      <EPortfolio show={showEPortfolio} setShow={setShowEPortfolio} />
      <InventorySystem show={showInventorySystem} setShow={setShowInventorySystem} />
      <MatryoshkaGrid show={showMatryoshkaGrid} setShow={setShowMatryoshkaGrid} />
      <Tetris show={showTetris} setShow={setShowTetris} />
      <AmazonianTiles show={showAmazonianTiles} setShow={setShowAmazonianTiles} />
    </>
  );
}

export default Cards;