import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Row } from 'react-bootstrap';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
const AllSparklineCharts = () => {
  return <Row>
      <Col md={6} lg={4}>
        <ComponentContainerCard title="Line Charts">
          <div className="mt-4">
            <Sparklines data={[0, 23, 43, 35, 44, 45, 56, 37, 40]} height={50} width={160} limit={7} margin={5}>
              <SparklinesLine color="#007aff" />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Bar Chart">
          <div className="mt-4">
            <Sparklines data={[3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]} height={50} width={160}>
              <SparklinesBars style={{
              fill: '#007aff'
            }} />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="LineSpots Chart">
          <div className="mt-4">
            <Sparklines height={50} width={160} data={[25, 23, 26, 24, 25, 32, 30, 24, 19]}>
              <SparklinesLine color="#007aff" />
              <SparklinesSpots style={{
              fill: '#007aff'
            }} />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Custom Chart">
          <div className="mt-4">
            <Sparklines height={50} width={160} data={[25, 23, 26, 24, 25, 32, 30, 24, 19]}>
              <SparklinesBars style={{
              stroke: 'white',
              fill: '#007aff',
              fillOpacity: '.25'
            }} />
              <SparklinesLine style={{
              stroke: '#007aff',
              fill: 'none'
            }} />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Reference Line Chart">
          <div className="mt-4">
            <Sparklines height={50} width={160} data={[87, 50, 80, 20, 88, 56, 60, 30, 70, 9, 110, 11, 91, 93, 100]}>
              <SparklinesLine color="#007aff" />
              <SparklinesReferenceLine type="median" />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Reference bar Chart">
          <div className="text-center mt-4">
            <Sparklines height={50} width={160} data={[87, 50, 80, 20, 88, 56, 60, 30, 70, 9, 110, 11, 91, 93, 100]}>
              <SparklinesBars style={{
              fill: '#007aff',
              fillOpacity: '.5'
            }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Real world Chart">
          <div className="text-center mt-4">
            <Sparklines height={100} width={290} data={[25, 23, 26, 24, 25, 32, 30, 24, 19, 35, 14, 38, 20, 31]}>
              <SparklinesLine style={{
              strokeWidth: 3,
              stroke: '#007aff',
              fill: 'none'
            }} />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Real world With Background Chart">
          <div className="text-center mt-4" style={{
          minHeight: 164
        }}>
            <Sparklines height={100} width={290} data={[5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15]}>
              <SparklinesLine style={{
              stroke: 'rgb(52, 140, 212)',
              fill: '#007aff',
              fillOpacity: '1'
            }} />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>

      <Col md={6} lg={4}>
        <ComponentContainerCard title="Box Plot Chart">
          <div className="text-center mt-4" style={{
          minHeight: 164
        }}>
            <Sparklines height={100} width={290} data={[5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15]} style={{
            background: 'rgb(35, 62, 73)'
          }} margin={10}>
              <SparklinesLine style={{
              stroke: 'none',
              fill: '#007aff',
              fillOpacity: '.5'
            }} />
            </Sparklines>
          </div>
        </ComponentContainerCard>
      </Col>
    </Row>;
};
export default AllSparklineCharts;