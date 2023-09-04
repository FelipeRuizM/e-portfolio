import { Row, Col } from 'react-bootstrap';

export const About = () => {

  return (
    <section id='about'>&zwnj;
      <Row className="justify-content-md-center align-items-center" id="about-row">
        <Col className="col-lg-8 p-4">
          <h3 className="style-text-text-color display-4 text-start">
            <span className='style-text-sub-color'>1.</span> About me</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center align-items-center">
        <Col md={{ span: 6, offset: 2 }} className="col-sm-4 m-2 p-4" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <p className='text-start style-text-text-color test'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          <p className='text-start style-text-text-color test'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Penatibus et magnis dis parturient. Id semper risus in hendrerit.</p>
          <p className='text-start style-text-text-color test'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis magna.</p>
        </Col>
        <Col md={{ span: 3, offset: 1 }} className="col-sm-3 m-2">
          <img src={require('../assets/img/profile-pic.png')} alt={"Felipe Ruiz Profile"} className='img-fluid' />
        </Col>
      </Row>
    </section>
  );
}