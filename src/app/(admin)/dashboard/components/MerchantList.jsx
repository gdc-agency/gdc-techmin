import IconifyIcon from '@/components/wrappers/IconifyIcon';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { Card, CardHeader, CardTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MerchantList = ({
  merchants
}) => {
  return <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <div>
          <CardTitle as={'h4'}>Merchant list</CardTitle>
          <p className="text-muted fw-semibold mb-0">Social Merchant list</p>
        </div>
        <Link to="" className="btn btn-sm btn-light">
          <IconifyIcon icon="mdi:plus" />
        </Link>
      </CardHeader>
      <SimplebarReactClient className="py-0 my-3 card-body" data-simplebar style={{
      maxHeight: 470
    }}>
        {merchants.map((merchant, idx) => <div className="d-flex align-items-center mb-3" key={idx}>
            <div className="flex-shrink-0">
              <div className="avatar-sm rounded">
                <span className={`avatar-title bg-transparent border border-${merchant.variant} text-${merchant.variant}`}>{merchant.icon}</span>
              </div>
            </div>
            <div className="flex-grow-1 ms-2">
              <Link to="" className="h4 my-0 fw-semibold text-reset">
                {merchant.name} <IconifyIcon icon="mdi:check-decagram" className="text-muted ms-1" />
              </Link>
            </div>
            <Link to="" className="fs-16 text-dark text-end">
              <IconifyIcon icon="bi:arrow-right" />
            </Link>
          </div>)}
      </SimplebarReactClient>
    </Card>;
};
export default MerchantList;