import { currentYear, developedBy } from '@/context/constants';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  const handleOpenNewtab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
  return <footer className="footer">
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            {currentYear} © Techmin - Theme by <Col xs={12} className="text-center">
          {currentYear} © Techmin - Theme by <a href="" onClick={(e) => {
    e.preventDefault();
    handleOpenNewtab("https://www.globaldigitalcare.pk/");
  }} target="_blank" rel="noopener noreferrer">Global Digital Care</a>
        </Col>
          </Col>
        </Row>
      </Container>
    </footer>;
};
export default Footer;
