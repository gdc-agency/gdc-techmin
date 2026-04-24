import { currentYear, developedBy } from '@/context/constants';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return <footer className="footer">
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            {currentYear} © Techmin - Theme by <Col xs={12} className="text-center">
          {currentYear} © Techmin - Theme by <a href="" onClick={() => handleOpenNewtab("https://www.globaldigitalcare.com/")} target="_blank" rel="noopener noreferrer">Global Digital Care</a>
        </Col>
          </Col>
        </Row>
      </Container>
    </footer>;
};
export default Footer;
