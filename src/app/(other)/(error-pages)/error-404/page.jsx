import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import logo from '@/assets/images/logo.png';
import logoDark from '@/assets/images/logo-dark.png';
import errorImg from '@/assets/images/svg/404.svg';
import authImg from '@/assets/images/auth-img.jpg';
const Error404 = () => {
  return <div className="account-pages p-sm-5  position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={9} lg={11}>
            <Card className="overflow-hidden">
              <Row className="g-0">
                <Col lg={6}>
                  <div className="d-flex flex-column h-100">
                    <div className="auth-brand p-4 text-center">
                      <Link to="/" className="logo-light">
                        <img src={logo} alt="logo" height={28} />
                      </Link>
                      <Link to="/" className="logo-dark">
                        <img src={logoDark} alt="dark logo" height={28} />
                      </Link>
                    </div>
                    <div className="p-4 mt-auto">
                      <div className="d-flex justify-content-center mb-5">
                        <img src={errorImg} alt="logo" className="img-fluid" />
                      </div>
                      <div className="text-center">
                        <h1 className="mb-3">404</h1>
                        <h4 className="fs-20">Page not found</h4>
                        <p className="text-muted mb-3">
                          
                          It&apos;s looking like you may have taken a wrong turn. Don&apos;t worry... it happens to the best of us.
                        </p>
                      </div>
                      <Link to="/" className="btn btn-soft-primary w-100">
                        <IconifyIcon icon="ri:home-4-line" className="me-1" /> Back to Home
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="d-none d-lg-block">
                  <img src={authImg} alt="auth-img" className="img-fluid rounded h-100" />
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
export default Error404;