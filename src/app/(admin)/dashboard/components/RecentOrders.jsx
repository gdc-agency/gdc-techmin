import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllOrders } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import clsx from 'clsx';
import { Button, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap';
const RecentOrders = () => {
  const allOrders = useFetchData(getAllOrders);
  return <Card>
      <CardHeader className="d-flex justify-content-between flex-wrap align-items-center">
        <div>
          <CardTitle as={'h4'}>Recent Order</CardTitle>
          <p className="text-muted fw-semibold mb-0">Order Based on Payment</p>
        </div>
        <div>
          <Button variant="outline-secondary" className="me-2">
            <IconifyIcon height={20} width={20} icon="mdi:filter-outline" className="pe-1 lh-1" />
            Filter
          </Button>
          <Button variant="outline-primary">See All</Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr className="table-light text-capitalize">
                <th>Customer</th>
                <th>Price</th>
                <th>Location</th>
                <th>Requested by</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {allOrders && allOrders.map((order, idx) => <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm">
                        {order.user && <img src={order.user.avatar} alt="avatar" className="img-fluid rounded-circle" />}
                      </div>
                      <div className="ps-2">
                        <h5 className="mb-1">{order.user?.name}</h5>
                        <p className="text-muted fs-6 mb-0">ORD-{order.orderId}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="fw-semibold">
                      {currency}
                      {order.price}
                    </span>
                  </td>
                  <td>
                    <h5 className="mb-0 ms-1">{order.user?.location}</h5>
                  </td>
                  <td>
                    <h5 className="mb-0">{order.requestedBy}</h5>
                  </td>
                  <td>
                    <span className={clsx('badge', order.status === 'Cancelled Requested' ? 'bg-danger-subtle text-danger' : order.status === 'Pending Approval' ? 'bg-primary-subtle text-primary' : 'bg-success-subtle text-success')}>
                      {order.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default RecentOrders;