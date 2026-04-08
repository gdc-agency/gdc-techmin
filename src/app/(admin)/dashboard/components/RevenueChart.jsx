import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const revenueStats = [{
  title: 'Current Week',
  count: `${currency}506.54`
}, {
  title: 'Previous Week',
  count: `${currency}305.25`
}, {
  title: 'Conversation',
  count: '3.27%'
}, {
  title: 'Customers',
  count: '3k'
}];
const RevenueChart = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 360,
      toolbar: {
        show: !1
      }
    },
    series: [{
      name: 'Day',
      data: [40, 60, 44, 84, 64, 110, 95]
    }, {
      name: 'Week',
      data: [20, 30, 22, 42, 32, 55, 44]
    }],
    stroke: {
      curve: 'straight',
      width: [4, 4]
    },
    grid: {
      xaxis: {
        lines: {
          show: !0
        }
      },
      yaxis: {
        lines: {
          show: !0
        }
      }
    },
    colors: ['#007aff', '#3f3f46'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Des']
    },
    legend: {
      show: !1
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [30, 100, 100, 100]
      }
    },
    dataLabels: {
      enabled: !1
    }
  };
  return <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <div>
          <CardTitle as="h4">Revenue</CardTitle>
          <p className="text-muted fw-semibold mb-0">Your Revenue This Week</p>
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
      <CardBody>
        <div className="pt-3 show">
          <ReactApexChart height={360} options={chartOptions} series={chartOptions.series} type="area" />
          <Row className="text-center">
            {revenueStats.map((item, idx) => <Col key={idx}>
                <p className="text-muted mt-3">{item.title}</p>
                <h3 className="mb-0">
                  <span>{item.count}</span>
                </h3>
              </Col>)}
          </Row>
        </div>
      </CardBody>
    </Card>;
};
export default RevenueChart;