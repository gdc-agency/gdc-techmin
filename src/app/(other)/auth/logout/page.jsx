import AuthLogo from '@/components/AuthLogo';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authImg from '@/assets/images/auth-img.jpg';
import logoutImg from '@/assets/images/svg/logout.svg';
const Logout = () => {
  return <div className="account-pages p-sm-5  position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={9} lg={11}>
            <Card className="overflow-hidden">
              <Row className="g-0">
                <Col lg={6}>
                  <div className="d-flex flex-column h-100">
                    <AuthLogo />
                    <div className="my-auto p-4">
                      <div className="text-center">
                        <h4 className="mt-0 fs-20">See You Again !</h4>
                        <p className="text-muted mb-4">You are now successfully sign out.</p>
                      </div>
                      <div className="logout-icon m-auto">
                        <img src={logoutImg} alt="logout-image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="d-none d-lg-block">
                  <img src={authImg} alt="image" className="img-fluid rounded h-100" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <p className="text-dark-emphasis">
              Don&apos;t have an account?
              <Link to="/auth/register" className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline">
                <b>Sign up</b>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Logout;