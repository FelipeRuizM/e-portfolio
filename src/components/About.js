import { Row, Col, Image, Container } from 'react-bootstrap';
import { SectionHeading } from './SectionHeading';

export const About = () => {

  const StyledLink = ({ link, text }) => (
    <a className='link-effect' href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  );

  const Skill = ({ skill }) => (
    //JavaScript (ES6+)
    <li><span className='style-text-main-color'>&gt;</span> {skill}</li>
  );

  const skills1 = ['JavaScript (ES6+)', 'Node.js', 'React', 'MySQL & Mongoose'];
  const skills2 = ['Python', 'Java', 'C++ & C#', 'AWS'];

  return (
    <section id='about'>
      <Container>
        <SectionHeading index={1} heading={'About me'}/>
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
                {skills1.map((skill) => (
                  <Skill key={skill} skill={skill} />
                  ))}
              </ul>
              <ul className='skills-list text-start style-text-text-color'>
                {skills2.map((skill) => (
                  <Skill key={skill} skill={skill} />
                  ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3} className="m-2 text-center">
            <Image src={require('../assets/images/profile-pic.png')} alt={"Felipe Ruiz Profile"} className='img-fluid cool-effect' rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
}