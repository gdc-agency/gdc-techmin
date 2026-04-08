import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { Alert, Col, Row } from 'react-bootstrap';
import LiveAlert from './components/LiveAlert';
const BasicAlerts = () => {
  return <ComponentContainerCard title="Default Alert" description={<p className="text-muted fs-14 mb-0">
          Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required
          contextual classes (e.g., .alert-success).
        </p>}>
      <Alert variant="primary" role="alert">
        <strong>Primary - </strong> A simple primary alert—check it out!
      </Alert>
      <Alert variant="secondary" role="alert">
        <strong>Secondary - </strong> A simple secondary alert—check it out!
      </Alert>
      <Alert variant="success" role="alert">
        <strong>Success - </strong> A simple success alert—check it out!
      </Alert>
      <Alert variant="danger" role="alert">
        <strong>Danger - </strong> A simple danger alert—check it out!
      </Alert>
      <Alert variant="warning" role="alert">
        <strong>Warning - </strong> A simple warning alert—check it out!
      </Alert>
      <Alert variant="info" className="text-bg-info  border-0" role="alert">
        <strong>Info - </strong> A simple info alert—check it out!
      </Alert>
      <Alert variant="info" className="text-bg-pink  border-0" role="alert">
        <strong>Pink - </strong> A simple info alert—check it out!
      </Alert>
      <Alert variant="info" className="text-bg-purple  border-0" role="alert">
        <strong>Purple - </strong> A simple info alert—check it out!
      </Alert>
      <Alert variant="light" className="text-bg-light  border-0" role="alert">
        <strong>Light - </strong> A simple light alert—check it out!
      </Alert>
      <Alert variant="dark" className="text-bg-dark  border-0 mb-0" role="alert">
        <strong>Dark - </strong> A simple dark alert—check it out!
      </Alert>
    </ComponentContainerCard>;
};
const DismissibleAlerts = () => {
  return <ComponentContainerCard title="Dismissible Alerts" description={<p className="text-muted fs-14 mb-0">
          Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the
          <code>.btn-close</code> button.
        </p>}>
      <Alert variant="primary" dismissible className="fade show text-bg-primary  border-0" role="alert">
        <strong>Primary - </strong> A simple primary alert—check it out!
      </Alert>
      <Alert variant="secondary" dismissible className="fade show text-bg-secondary  border-0" role="alert">
        <strong>Secondary - </strong> A simple secondary alert—check it out!
      </Alert>
      <Alert variant="success" dismissible className="fade show text-bg-success border-0" role="alert">
        <strong>Success - </strong> A simple success alert—check it out!
      </Alert>
      <Alert variant="danger" dismissible className="fade show text-bg-danger border-0" role="alert">
        <strong>Danger - </strong> A simple danger alert—check it out!
      </Alert>
      <Alert variant="warning" dismissible className="fade show text-bg-warning border-0" role="alert">
        <strong>Warning - </strong> A simple warning alert—check it out!
      </Alert>
      <Alert variant="info" dismissible className="fade show" role="alert">
        <strong>Info - </strong> A simple info alert—check it out!
      </Alert>
      <Alert variant="pink" dismissible className="fade show" role="alert">
        <strong>Pink - </strong> A simple pink alert—check it out!
      </Alert>
      <Alert variant="purple" dismissible className="fade show" role="alert">
        <strong>Purple - </strong> A simple purple alert—check it out!
      </Alert>
      <Alert variant="light" dismissible className="fade show text-dark" role="alert">
        <strong>Light - </strong> A simple light alert—check it out!
      </Alert>
      <Alert variant="dark" dismissible className="fade show mb-0" role="alert">
        <strong>Dark - </strong> A simple dark alert—check it out!
      </Alert>
    </ComponentContainerCard>;
};
const CustomAlerts = () => {
  return <ComponentContainerCard title="Custom Alerts" description={<p className="text-muted fs-14 mb-0">
          Display alert with transparent background and with contextual text color. Use classes
          <code>.bg-transparent</code>, and <code>.text-*</code>. E.g. <code>bg-transparent text-primary</code>.
        </p>}>
      <Alert variant="primary" className=" bg-transparent text-primary" role="alert">
        This is a <strong>primary</strong> alert—check it out!
      </Alert>
      <Alert variant="secondary" className=" bg-transparent text-secondary" role="alert">
        This is a <strong>secondary</strong> alert—check it out!
      </Alert>
      <Alert variant="success" className=" bg-transparent text-success" role="alert">
        This is a <strong>success</strong> alert—check it out!
      </Alert>
      <Alert variant="info" className=" bg-transparent text-info" role="alert">
        This is a <strong>info</strong> alert—check it out!
      </Alert>
      <Alert variant="warning" className=" bg-transparent text-warning" role="alert">
        This is a <strong>warning</strong> alert—check it out!
      </Alert>
      <Alert variant="danger" className=" bg-transparent text-danger" role="alert">
        This is a <strong>danger</strong> alert—check it out!
      </Alert>
      <Alert variant="warning" className=" bg-transparent text-warning" role="alert">
        This is a <strong>warning</strong> alert—check it out!
      </Alert>
      <Alert variant="pink" className=" bg-transparent text-pink" role="alert">
        This is a <strong>Pink</strong> alert—check it out!
      </Alert>
      <Alert variant="purple" className=" bg-transparent text-purple" role="alert">
        This is a <strong>Purple</strong> alert—check it out!
      </Alert>
      <Alert variant="light" className=" bg-transparent text-dark" role="alert">
        This is a <strong>light</strong> alert—check it out!
      </Alert>
      <Alert variant="dark" className=" bg-transparent text-dark mb-0" role="alert">
        This is a <strong>dark</strong> alert—check it out!
      </Alert>
    </ComponentContainerCard>;
};
const LinkAlerts = () => {
  return <ComponentContainerCard title="Link Color" description={<p className="text-muted fs-14 mb-0">
          Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.
        </p>}>
      <Alert variant="primary" role="alert">
        A simple primary alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="secondary" role="alert">
        A simple secondary alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="success" role="alert">
        A simple success alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="danger" role="alert">
        A simple danger alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="warning" role="alert">
        A simple warning alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="info" role="alert">
        A simple info alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="pink" role="alert">
        A simple pink alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="purple" role="alert">
        A simple purple alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="light" role="alert">
        A simple light alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
      <Alert variant="dark" role="alert">
        A simple dark alert with
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
    </ComponentContainerCard>;
};
const IconAlerts = () => {
  return <ComponentContainerCard title="Icons with Alerts" description={<p className="text-muted fs-14 mb-0">
          Similarly, you can use flexbox utilities and Bootstrap Icons to create alerts with icons. Depending on your icons and content, you may want
          to add more utilities or custom styles.
        </p>}>
      <Alert variant="primary" className="d-flex align-items-center" role="alert">
        <IconifyIcon icon="mdi:alert-circle-outline" className="me-1 fs-16" />
        <div>An example alert with an icon</div>
      </Alert>
      <Alert variant="success" className="d-flex align-items-center" role="alert">
        <IconifyIcon icon="mdi:check-circle-outline" className="me-1 fs-16" />
        <div>An example success alert with an icon</div>
      </Alert>
      <Alert variant="warning" className="d-flex align-items-center" role="alert">
        <IconifyIcon icon="mdi:alert" className="me-1 fs-16" />
        <div>An example warning alert with an icon</div>
      </Alert>
      <Alert variant="danger" className="d-flex align-items-center" role="alert">
        <IconifyIcon icon="mdi:alert" className="me-1 fs-16" />
        <div>An example danger alert with an icon</div>
      </Alert>
    </ComponentContainerCard>;
};
const AdditionalContentAlerts = () => {
  return <ComponentContainerCard title="Additional content" description={<p className="text-muted fs-14 mb-0">Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>}>
      <Alert variant="success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
          within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </Alert>
    </ComponentContainerCard>;
};
const Alerts = () => {
  return <>
      <Row>
        <Col lg={6}>
          <BasicAlerts />
        </Col>
        <Col lg={6}>
          <DismissibleAlerts />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CustomAlerts />
        </Col>
        <Col lg={6}>
          <LinkAlerts />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <IconAlerts />
        </Col>
        <Col lg={6}>
          <AdditionalContentAlerts />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <LiveAlert />
        </Col>
      </Row>
    </>;
};
export default Alerts;