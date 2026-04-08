import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Row } from 'react-bootstrap';
import FAQ from './components/FAQ';
import Features from './components/Features';
import PageTitle from '@/components/PageTitle';
const Faqs = () => {
  return <>
      <PageTitle title="FAQ" />
      <Row>
        <Col xs={12}>
          <Row className="align-items-center justify-content-between">
            <Col xl={6} md={6}>
              <div className="mb-4">
                <h2 className="mb-2">Frequently Asked Questions</h2>
                <p className="text-muted mt-3">
                  Nisi praesentium similique totam odio obcaecati, reprehenderit, dignissimos rem temporibus ea inventore alias! Beatae animi nemo ea
                  tempora, temporibus laborum facilis ut!
                </p>
              </div>
            </Col>
            <Col xl={4} md={3}>
              <button className="btn float-sm-end bg-primary text-white mb-3">
                Documentation <IconifyIcon icon="mdi:login-variant" className="ms-2" />
              </button>
            </Col>
          </Row>

          <FAQ />

          <Features />
        </Col>
      </Row>
    </>;
};
export default Faqs;