import { Row, Col, Image } from 'react-bootstrap';

export const About = () => {

  const StyledLink = ({ link, text }) => (
    <a className='link-effect' href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  );

  return (
    <section id='about'>&zwnj;
      <Row className="justify-content-md-center align-items-center" id="about-row">
        <Col className="col-lg-8 p-4">
          <h3 className="style-text-text-color display-4 text-start">
            <span className='style-text-sub-color'>1.</span> About me</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center align-items-center" style={{ marginRight: '4px' }}>
        <Col md={{ span: 6, offset: 2 }} className="col-sm-4 m-2 p-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <p className='text-start style-text-text-color'>Hi, my name is <span className='style-text-main-color'>Felipe Ruiz</span> and I'm a Full-Stack Developer. My love for programming started back in 2019 when I watched some Python tutorials on YouTube and I immediately was obsessed with all the possibilities available. It was so much fun solving problems by not only completing them but trying to do it in the cleverest way possible, striving for excellence.</p>
          <p className='text-start style-text-text-color'>This passion for coding has not only shaped my career but has also become my personal <StyledLink link={'https://www.sloww.co/ikigai/'} text={'ikigai'} />. I look forward to pushing the boundaries of what's possible in software development, collaborating with like-minded individuals, and contributing to innovative projects that make a difference in the world. Whether it's crafting elegant algorithms, building user-friendly interfaces, or architecting robust backend systems, I am committed to give my best in every aspect of my work.</p>
          <p className='text-start style-text-text-color'>Lately, I've been involved with a handful of technologies:</p>
          <div style={{ display: 'flex' }}>
            <ul className='skills-list text-start style-text-text-color'>
              <li><span className='style-text-main-color'>&gt;</span> JavaScript (ES6+)</li>
              <li><span className='style-text-main-color'>&gt;</span>  Node.js</li>
              <li><span className='style-text-main-color'>&gt;</span>  React</li>
              <li><span className='style-text-main-color'>&gt;</span>  MySQL & Mongoose</li>
            </ul>
            <ul className='skills-list text-start style-text-text-color'>
              <li><span className='style-text-main-color'>&gt;</span>  Python</li>
              <li><span className='style-text-main-color'>&gt;</span>  Java</li>
              <li><span className='style-text-main-color'>&gt;</span>  C++ & C#</li>
              <li><span className='style-text-main-color'>&gt;</span>  AWS</li>
            </ul>
          </div>
        </Col>
        <Col md={{ span: 3, offset: 1 }} className="col-sm-3 m-2">
          <Image src={require('../assets/profile-pic.png')} alt={"Felipe Ruiz Profile"} className='img-fluid profile-pic' rounded />
        </Col>
      </Row>
    </section>
  );
}