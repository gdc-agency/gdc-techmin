import clsx from 'clsx';
import { Card, CardBody, CardHeader } from 'react-bootstrap';
const ComponentContainerCard = ({
  title,
  description,
  children,
  className
}) => {
  return <Card>
      <CardHeader>
        <h4 className={clsx('card-title', {
        'mb-0': !description
      })}>{title}</h4>
        <>{description}</>
      </CardHeader>
      <CardBody className={className}>
        <>{children}</>
      </CardBody>
    </Card>;
};
export default ComponentContainerCard;