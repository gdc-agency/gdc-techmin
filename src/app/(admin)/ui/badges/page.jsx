import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Badge, Col, Row } from 'react-bootstrap';
const DefaultBadges = () => {
  return <ComponentContainerCard title="Default" description={<p className="text-muted mb-0">
          A simple labeling component. Badges scale to match the size of the immediate parent element by using relative font sizing and
          <code>em</code> units.
        </p>}>
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
    </ComponentContainerCard>;
};
const PillBadges = () => {
  return <ComponentContainerCard title="Pill Badges">
      <p className="text-muted fs-14 mb-3">
        Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
      </p>
      <div className="icons-center gap-1">
        <Badge bg="primary" pill>
          Primary
        </Badge>
        <Badge bg="secondary" pill className="text-light">
          Secondary
        </Badge>
        <Badge bg="success" pill>
          Success
        </Badge>
        <Badge bg="danger" pill>
          Danger
        </Badge>
        <Badge bg="warning" pill>
          Warning
        </Badge>
        <Badge bg="info" pill>
          Info
        </Badge>
        <span className="badge text-bg-light rounded-pill">Light</span>
        <span className="badge text-bg-dark rounded-pill">Dark</span>
      </div>

      <h5 className="mt-4">Lighten Badges</h5>
      <p className="text-muted fs-14 mb-3">
        Use the <code>.bg-*-subtle text-*</code> modifier class to make badges lighten.
      </p>
      <div className="icons-center gap-1">
        <Badge bg="primary-subtle" pill text="primary">
          Primary
        </Badge>
        <Badge bg="secondary-subtle" pill text="secondary">
          Secondary
        </Badge>
        <Badge bg="success-subtle" pill text="success">
          Success
        </Badge>
        <Badge bg="danger-subtle" pill text="danger">
          Danger
        </Badge>
        <Badge bg="warning-subtle" pill text="warning">
          Warning
        </Badge>
        <Badge bg="info-subtle" pill text="info">
          Info
        </Badge>
        <Badge bg="dark-subtle" pill text="dark">
          Dark
        </Badge>
      </div>
      <h5 className="mt-4">Outline Badges</h5>
      <p className="text-muted fs-14 mb-3">
        Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
      </p>
      <div className="icons-center gap-1">
        <span className="badge badge-outline-primary rounded-pill">Primary</span>
        <span className="badge badge-outline-secondary rounded-pill">Secondary</span>
        <span className="badge badge-outline-success rounded-pill">Success</span>
        <span className="badge badge-outline-danger rounded-pill">Danger</span>
        <span className="badge badge-outline-warning rounded-pill">Warning</span>
        <span className="badge badge-outline-info rounded-pill">Info</span>
        <span className="badge badge-outline-dark rounded-pill">Dark</span>
      </div>
    </ComponentContainerCard>;
};
const BadgePosition = () => {
  return <ComponentContainerCard title="Badge Positioned" description={<p className="text-muted mb-0">
          Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.
        </p>}>
      <Row>
        <Col xs={6}>
          <h4 className="card-title">Buttons</h4>
          <button type="button" className="btn btn-primary">
            Notifications <span className="badge text-bg-secondary">4</span>
          </button>
        </Col>
        <Col xs={6}>
          <h4 className="card-title">Positioned </h4>
          <button type="button" className="btn btn-primary position-relative">
            Inbox
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Col>
        <Col xs={6}>
          <button type="button" className="btn btn-primary position-relative mt-4">
            Profile
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const Badges = () => {
  return <>
      <PageTitle title="Badges" />
      <Row>
        <Col lg={6}>
          <DefaultBadges />
          <PillBadges />
        </Col>
        <Col lg={6}>
          <BadgePosition />
        </Col>
      </Row>
    </>;
};
export default Badges;