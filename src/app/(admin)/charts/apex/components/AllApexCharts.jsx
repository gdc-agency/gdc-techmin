import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { AreaApexOpt, BasicBarOps, BasicBoxplotOps, BasicPolarAreaOpt, BasicRadarOpt, GroupBarOps, LineWithDataLabelOps, MonochromePolarAreaOpt, PolygonFillOpt, ScatterBoxplotOps, SimpleDonutOpt, SimplePieOpt, SpilineAreaApexOpt, apexColumnChartOpts, basicRadialBarChart, columnWithDataLableOpts, lineChartOpts, lineColumnChartOpts, multipleRadialBarOpts, multipleYAxisChartOpts, secondBubbleChartOpts, simpleBubbleChartOpts, simpleCandlestickChartOpts } from '../data';
const AllApexCharts = () => {
  return <>
      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic Area Chart">
            <ReactApexChart className="apex-charts" options={AreaApexOpt} height={380} series={AreaApexOpt.series} type="area" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Spline Area">
            <ReactApexChart className="apex-charts" options={SpilineAreaApexOpt} height={380} series={SpilineAreaApexOpt.series} type="area" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic Bar Chart">
            <ReactApexChart className="apex-charts" options={BasicBarOps} height={380} series={BasicBarOps.series} type="bar" />
          </ComponentContainerCard>
        </Col>

        <Col xl={6}>
          <ComponentContainerCard title="Grouped Bar Chart">
            <ReactApexChart className="apex-charts" options={GroupBarOps} height={380} series={GroupBarOps.series} type="bar" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic Boxplot">
            <ReactApexChart className="apex-charts" options={BasicBoxplotOps} height={350} series={BasicBoxplotOps.series} type="boxPlot" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Scatter Boxplot">
            <ReactApexChart className="apex-charts" options={ScatterBoxplotOps} height={350} series={ScatterBoxplotOps.series} type="boxPlot" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Simple Bubble Chart">
            <ReactApexChart className="apex-charts" options={simpleBubbleChartOpts} height={380} series={simpleBubbleChartOpts.series} type="bubble" />
          </ComponentContainerCard>
        </Col>

        <Col xl={6}>
          <ComponentContainerCard title="3D Bubble Chart">
            <ReactApexChart className="apex-charts" options={secondBubbleChartOpts} height={380} series={secondBubbleChartOpts.series} type="bubble" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic Column Chart">
            <ReactApexChart className="apex-charts" options={apexColumnChartOpts} height={380} series={apexColumnChartOpts.series} type="bar" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Column Chart with Datalabels">
            <ReactApexChart className="apex-charts" options={columnWithDataLableOpts} height={380} series={columnWithDataLableOpts.series} type="bar" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Simple line chart">
            <ReactApexChart className="apex-charts" options={lineChartOpts} height={380} series={lineChartOpts.series} type="line" />
          </ComponentContainerCard>
        </Col>

        <Col xl={6}>
          <ComponentContainerCard title="Line with Data Labels">
            <ReactApexChart className="apex-charts" options={LineWithDataLabelOps} height={380} series={LineWithDataLabelOps.series} type="line" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Line & Column Chart">
            <ReactApexChart className="apex-charts" options={lineColumnChartOpts} height={380} series={lineColumnChartOpts.series} type="line" />
          </ComponentContainerCard>
        </Col>

        <Col xl={6}>
          <ComponentContainerCard title="Multiple Y-Axis Chart">
            <ReactApexChart className="apex-charts" options={multipleYAxisChartOpts} height={380} series={multipleYAxisChartOpts.series} type="line" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Simple Pie Chart">
            <ReactApexChart className="apex-charts" options={SimplePieOpt} height={320} series={SimplePieOpt.series} type="pie" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Simple Donut Chart">
            <ReactApexChart className="apex-charts" options={SimpleDonutOpt} height={320} series={SimpleDonutOpt.series} type="donut" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic Polar Area Chart">
            <ReactApexChart className="apex-charts" options={BasicPolarAreaOpt} height={380} series={BasicPolarAreaOpt.series} type="polarArea" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Monochrome Polar Area">
            <ReactApexChart className="apex-charts" options={MonochromePolarAreaOpt} height={380} series={MonochromePolarAreaOpt.series} type="polarArea" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic Radar Chart">
            <ReactApexChart className="apex-charts" options={BasicRadarOpt} height={350} series={BasicRadarOpt.series} type="radar" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Radar with Polygon-fill">
            <ReactApexChart className="apex-charts" options={PolygonFillOpt} height={350} series={PolygonFillOpt.series} type="radar" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Basic RadialBar Chart">
            <ReactApexChart className="apex-charts" options={basicRadialBarChart} height={350} series={basicRadialBarChart.series} type="radialBar" />
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Multiple RadialBars">
            <ReactApexChart className="apex-charts" options={multipleRadialBarOpts} height={350} series={multipleRadialBarOpts.series} type="radialBar" />
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Simple Candlestick Chart">
            <ReactApexChart className="apex-charts" options={simpleCandlestickChartOpts} height={400} series={simpleCandlestickChartOpts.series} type="candlestick" />
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default AllApexCharts;