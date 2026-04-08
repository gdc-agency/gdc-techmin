import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllPricingPlans } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import clsx from 'clsx';
import { Button, Card, Col, Row } from 'react-bootstrap';
const PricingCard = ({
  plan
}) => {
  const {
    description,
    features,
    icon,
    name,
    price,
    variant
  } = plan;
  return <Card className="h-100">
      <div className="p-3">
        <div className={`badge bg-${variant}-subtle text-${variant} fs-14 px-2 py-1 mb-3`}>{name}</div>
        <div className={`avatar-md d-flex align-items-center justify-content-center bg-${variant}-subtle text-${variant} border border-${variant} mb-3`}>
          <IconifyIcon icon={icon.icon} className="fs-36" />
        </div>
        <h2>
          {currency}
          {price} <span className="fw-medium fs-16">/ pre month</span>
        </h2>
        <h5 className="fw-medium mb-0">{description}</h5>
      </div>
      <hr className="m-0" />
      <div className="p-3 d-flex flex-column h-100">
        <ul className="flex-grow-1 list-unstyled d-flex flex-column gap-2 mb-0">
          {features.map((feature, idx) => <li className="fs-15 icons-center mb-1" key={idx}>
              <IconifyIcon icon={feature.icon.icon} className={clsx('fs-20 lh-sm me-2', {
            'text-danger': feature.icon.color
          })} />
              {feature.name}
            </li>)}
        </ul>
        <div className="flex-shrink-0">
          <Button variant={variant} className="w-100">
            Change Plan
          </Button>
        </div>
      </div>
    </Card>;
};
const Pricing = () => {
  const pricingPlans = useFetchData(getAllPricingPlans);
  return <>
      <PageTitle title="Pricing" />
      <Row className="justify-content-center">
        <Col xxl={10}>
          <div className="text-center mb-4">
            <h3 className="mb-2">Our Plans</h3>
            <h5 className="text-muted">Choose the plan that fits your needs.</h5>
          </div>
          <Row className="justify-content-center my-3">
            {pricingPlans && pricingPlans.map((plan, idx) => <Col xl={4} lg={4} md={6} className="mb-3" key={idx}>
                <PricingCard plan={plan} />
              </Col>)}
          </Row>
        </Col>
      </Row>
    </>;
};
export default Pricing;