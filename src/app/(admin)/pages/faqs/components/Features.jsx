import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { faqFeatures } from '../data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const FeatureCard = ({
  feature
}) => {
  const {
    description,
    icon,
    title,
    variant
  } = feature;
  return <Card className="h-100">
      <CardBody className="text-center">
        <div className={`avatar-sm d-flex justify-content-center align-items-center rounded-circle bg-${variant} mx-auto mb-3`}>
          <IconifyIcon icon={icon} className="fs-24 text-white" />
        </div>
        <h4 className="heading-title">{title}</h4>
        <p className="text-muted mb-0">{description}</p>
      </CardBody>
    </Card>;
};
const Features = () => {
  return <Row>
      {faqFeatures.map((feature, idx) => <Col xl={3} md={6} className="mb-3" key={idx}>
          <FeatureCard feature={feature} />
        </Col>)}
    </Row>;
};
export default Features;