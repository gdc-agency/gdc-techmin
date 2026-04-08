import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Chart from 'chart.js/auto';

// data
import { boundariesConfig, datasetConfig, borderRadiusConfig, floatingConfig, interpolationConfig, lineConfig, bubbleConfig, donutConfig } from '../data';
const AllChartjsCharts = () => {
  useEffect(() => {
    const boundariesTag = document.getElementById('boundaries-example');
    const boundariesChart = new Chart(boundariesTag, boundariesConfig);
    const datasetTag = document.getElementById('dataset-example');
    const datasetChart = new Chart(datasetTag, datasetConfig);
    const borderRadiusTag = document.getElementById('border-radius-example');
    const borderRadiusChart = new Chart(borderRadiusTag, borderRadiusConfig);
    const floatingTag = document.getElementById('floating-example');
    const floatingChart = new Chart(floatingTag, floatingConfig);
    const interpolationTag = document.getElementById('interpolation-example');
    const interpolationChart = new Chart(interpolationTag, interpolationConfig);
    const lineTag = document.getElementById('line-example');
    const lineChart = new Chart(lineTag, lineConfig);
    const bubbleTag = document.getElementById('bubble-example');
    const bubbleChart = new Chart(bubbleTag, bubbleConfig);
    const donutTag = document.getElementById('donut-example');
    const donutChart = new Chart(donutTag, donutConfig);
    return () => {
      boundariesChart.destroy();
      datasetChart.destroy();
      borderRadiusChart.destroy();
      floatingChart.destroy();
      interpolationChart.destroy();
      lineChart.destroy();
      bubbleChart.destroy();
      donutChart.destroy();
    };
  }, []);
  return <>
      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Boundaries">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="boundaries-example" data-colors="#3bc0c3,#47ad77"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Different Dataset">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="dataset-example" data-colors="#3bc0c3,#4489e4,#d03f3f,#716cb0, #f24f7c"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Border Radius">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="border-radius-example" data-colors="#3e60d5,#47ad77"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Floating">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="floating-example" data-colors="#3e60d5,#47ad77"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Interpolation">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="interpolation-example" data-colors="#4489e4,#d03f3f"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Line">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="line-example" data-colors="#3e60d5,#47ad77"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Bubble">
            <div className="mt-3 chartjs-chart" style={{
            height: 320
          }}>
              <canvas id="bubble-example" data-colors="#3e60d5,#47ad77"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="DONUT">
            <div className="mt-3 chartjs-chart" style={{
            height: '320px'
          }}>
              <canvas id="donut-example" data-colors="#3e60d5,#fa5c7c,#47ad77,#ebeff2"></canvas>
            </div>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default AllChartjsCharts;