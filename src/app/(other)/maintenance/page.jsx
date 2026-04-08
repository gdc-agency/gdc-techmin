import maintenanceImg from '@/assets/images/svg/under_maintenance.png';
import { Col, Container, Row } from 'react-bootstrap';
const Maintenance = () => {
  return <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={6} xs={12}>
            <div className="mb-4">
              <img src={maintenanceImg} alt="maintenance" className="img-fluid" />
            </div>
            <div className="text-center">
              <h2 className="mb-3 text-muted">Sorry we are under maintenance</h2>
              <p className="text-dark-emphasis fs-15 mb-1">Our website currently undergoing maintenance.</p>
              <p className="text-dark-emphasis fs-15 mb-4">We should be a back shotly. thankyou for patience.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Maintenance;