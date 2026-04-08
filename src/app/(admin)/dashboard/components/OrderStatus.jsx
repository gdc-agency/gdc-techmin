import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getOrderStatus } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import { timeSince } from '@/utils/date';
import { Card, CardBody, CardHeader, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OrderStatus = () => {
  const orderStatusTimeline = useFetchData(getOrderStatus);
  return <Card>
      <CardHeader className="d-flex align-items-center">
        <div className="flex-grow-1">
          <CardTitle as={'h4'}>Orders Status</CardTitle>
          <p className="text-muted fw-semibold mb-0">Your Orders</p>
        </div>
        <Dropdown>
          <DropdownToggle as="a" className="arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
            <IconifyIcon icon="ri:more-2-fill" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem>Sales Report</DropdownItem>
            <DropdownItem>Export Report</DropdownItem>
            <DropdownItem>Profit</DropdownItem>
            <DropdownItem>Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="p-0">
        <div className="timeline-alt p-3">
          {orderStatusTimeline?.map((timeline, idx) => <div className="timeline-item" key={idx}>
              <div className={`bg-${timeline.icon.color}-subtle text-${timeline.icon.color} timeline-icon flex-centered`}>
                <IconifyIcon icon={timeline.icon.icon} height={12} width={12} />
              </div>
              <div className="timeline-item-info">
                <Link to="" className={`text-${timeline.icon.color} fw-bold mb-1 d-block`}>
                  {timeline.title}
                </Link>
                <small>{timeline.description}</small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">{timeSince(timeline.time)}</small>
                </p>
              </div>
            </div>)}
        </div>
      </CardBody>
    </Card>;
};
export default OrderStatus;