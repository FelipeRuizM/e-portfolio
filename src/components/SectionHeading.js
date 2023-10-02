import { Row, Col } from 'react-bootstrap'

export const SectionHeading = ({index, heading}) => (
  <Row className="justify-content-center align-items-center">
    <Col lg={8} className="p-4">
      <h3 className="style-text-text-color display-4 text-center">
        <span className='style-text-sub-color'>{index}.</span> {heading}
      </h3>
    </Col>
  </Row>
);