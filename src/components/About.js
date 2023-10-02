import { Row, Col, Image, Container } from 'react-bootstrap';

export const About = () => {

  const StyledLink = ({ link, text }) => (
    <a className='link-effect' href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  );

  return (
    <section id='about'>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={8} className="p-4">
            <h3 className="style-text-text-color display-4 text-center">
              <span className='style-text-sub-color'>1.</span> About me
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md={6} lg={6} className="m-2 p-4">
            <p className='text-start style-text-text-color'>
              Hi, my name is <span className='style-text-main-color'>Felipe Ruiz</span> and I'm a Full-Stack Developer. My love for programming started back in 2019 when I watched some Python tutorials on YouTube, and I immediately became obsessed with all the possibilities available. It was so much fun solving problems by not only completing them but also trying to do it in the cleverest way possible, striving for excellence.
            </p>
            <p className='text-start style-text-text-color'>
              This passion for coding has not only shaped my career but has also become my personal <StyledLink link={'https://www.sloww.co/ikigai/'} text={'ikigai'} />. I look forward to pushing the boundaries of what's possible in software development, collaborating with like-minded individuals, and contributing to innovative projects that make a difference in the world. Whether it's crafting elegant algorithms, building user-friendly interfaces, or architecting robust backend systems, I am committed to giving my best in every aspect of my work.
            </p>
            <p className='text-start style-text-text-color'>
              Lately, I've been involved with a handful of technologies:
            </p>
            <div style={{ display: 'flex' }}>
              <ul className='skills-list text-start style-text-text-color'>
                <li><span className='style-text-main-color'>&gt;</span> JavaScript (ES6+)</li>
                <li><span className='style-text-main-color'>&gt;</span> Node.js</li>
                <li><span className='style-text-main-color'>&gt;</span> React</li>
                <li><span className='style-text-main-color'>&gt;</span> MySQL & Mongoose</li>
              </ul>
              <ul className='skills-list text-start style-text-text-color'>
                <li><span className='style-text-main-color'>&gt;</span> Python</li>
                <li><span className='style-text-main-color'>&gt;</span> Java</li>
                <li><span className='style-text-main-color'>&gt;</span> C++ & C#</li>
                <li><span className='style-text-main-color'>&gt;</span> AWS</li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3} className="m-2 text-center">
            <Image src={require('../assets/profile-pic.png')} alt={"Felipe Ruiz Profile"} className='img-fluid profile-pic' rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
}