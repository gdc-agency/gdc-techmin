import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import PageTitle from '@/components/PageTitle';
import error404 from '@/assets/images/svg/404.svg';
import { Link } from 'react-router-dom';
const Error404Alt = () => {
  return <>
      <PageTitle title="Error 404 Alt" />
      <div className="d-flex flex-column align-items-center justify-content-center h-100 my-auto">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center">
              <img src={error404} alt="error" className="img-fluid h-100 w-100" />
              <h1 className="my-3 fs-48">404 Alt</h1>
              <h3 className="fs-22">Page not found</h3>
              <p className="text-muted mb-3 fs-16">
                
                It&apos;s looking like you may have taken a wrong turn. Don&apos;t worry... it happens to the best of us.
              </p>
              <Link className="btn btn-soft-primary mt-3 w-100" to="/">
                <IconifyIcon icon="ri:home-4-line" className="me-1" /> Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>;
};
export default Error404Alt;