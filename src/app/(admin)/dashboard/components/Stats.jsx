import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, Col, ProgressBar, Row } from 'react-bootstrap';
import { stats } from '../data';
import ReactApexChart from 'react-apexcharts';
const StatCard = ({
  stat
}) => {
  const {
    change,
    changeVariant,
    chartOptions,
    icon,
    progress,
    stats,
    title,
    variant
  } = stat;
  return <Card className="overflow-hidden border-top-0">
      <ProgressBar variant={variant} now={progress} className="progress-sm rounded-0 bg-light" />
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="text-muted fw-semibold fs-16 mb-1">{title}</p>
            <p className="text-muted mb-4">
              <span className={`badge bg-${changeVariant}-subtle text-${changeVariant}`}>
                {changeVariant === 'danger' ? <IconifyIcon icon="bi:graph-down-arrow" className="me-1" /> : <IconifyIcon icon="bi:graph-up-arrow" className="me-1" />}
                {change}%
              </span>
              vs last month
            </p>
          </div>
          <div className="avatar-sm mb-4">
            <div className={`avatar-title bg-${variant}-subtle text-${variant} fs-24 rounded`}>
              <IconifyIcon icon={icon.icon} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-end">
          <h3 className="mb-0 d-flex">
            <IconifyIcon icon={stats.icon.icon} />
            {stats.count}
          </h3>
          <div className="d-flex align-items-end h-100">
            <ReactApexChart height={chartOptions.chart?.height} options={chartOptions} series={chartOptions.series} type={chartOptions.chart?.type} />
          </div>
        </div>
      </CardBody>
    </Card>;
};
const Stats = () => {
  return <Row>
      {stats.map((stat, idx) => <Col xl={4} key={idx}>
          <StatCard stat={stat} />
        </Col>)}
    </Row>;
};
export default Stats;