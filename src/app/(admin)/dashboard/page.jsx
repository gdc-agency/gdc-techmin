import { Col, Row } from 'react-bootstrap';
import Stats from './components/Stats';
import MerchantList from './components/MerchantList';
import { merchantListData } from './data';
import RevenueChart from './components/RevenueChart';
import OrderStatus from './components/OrderStatus';
import RecentOrders from './components/RecentOrders';
import PageTitle from '@/components/PageTitle';
const Dashboard = () => {
  return <>
      <PageTitle title="Dashboard" />
      <Stats />
      <Row>
        <Col lg={4} className="order-2 order-lg-1">
          <MerchantList merchants={merchantListData} />
        </Col>
        <Col lg={8} className="order-1 order-lg-2">
          <RevenueChart />
        </Col>
      </Row>
      <Row>
        <Col xxl={4} className="order-1 order-lg-2">
          <OrderStatus />
        </Col>
        <Col xxl={8} className="order-2 order-lg-1">
          <RecentOrders />
        </Col>
      </Row>
    </>;
};
export default Dashboard;