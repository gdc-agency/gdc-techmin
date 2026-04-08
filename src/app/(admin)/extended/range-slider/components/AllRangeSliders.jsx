import Nouislider from 'nouislider-react';
import { Col, Row } from 'react-bootstrap';
import 'nouislider/distribute/nouislider.css';
import ComponentContainerCard from '@/components/ComponentContainerCard';
const DefaultSlider = () => {
  return <ComponentContainerCard title="Default" description={<p className="text-muted mb-0">Start with default options</p>}>
      <Nouislider connect={[true, false]} range={{
      min: 0,
      max: 100
    }} className="text-danger" start={[50]} />
    </ComponentContainerCard>;
};
const SliderWithTooltip = () => {
  return <ComponentContainerCard title="Slider with Tooltip" description={<p className="text-muted mb-0">Only showing tooltips when sliding handles</p>}>
      <Nouislider range={{
      min: 0,
      max: 100
    }} start={[20, 80]} connect={true} tooltips={true} />
    </ComponentContainerCard>;
};
const StepSlider = () => {
  return <ComponentContainerCard title="Working with steps" description={<p className="text-muted mb-0">using step option</p>}>
      <Nouislider tooltips range={{
      min: 0,
      max: 1000
    }} step={100} connect start={[300, 600]} className="mb-2" />
    </ComponentContainerCard>;
};
const ClickingPipsSlider = () => {
  return <ComponentContainerCard title="Clicking Pipes" description={<p className="text-muted mb-0">Moving the slider by clicking pips</p>}>
      <div className="pb-4">
        <Nouislider range={{
        min: 0,
        max: 100
      }} start={[50]} pips={{
        mode: 'count',
        values: 5
      }} />
      </div>
    </ComponentContainerCard>;
};
const ToggleSlider = () => {
  return <ComponentContainerCard title="Toggle Slider" description={<p className="text-muted mb-0">Creating toggle using range</p>}>
      <div className="from-center">
        <Nouislider style={{
        height: '55px'
      }} range={{
        min: [0, 1],
        max: 1
      }} orientation="vertical" start={0} />
      </div>
    </ComponentContainerCard>;
};
const SoftLimitSlider = () => {
  return <ComponentContainerCard title="Soft limits" description={<p className="text-muted mb-0">soft limit slider using pipes options</p>}>
      <div className="pb-4">
        <Nouislider range={{
        min: 0,
        max: 100
      }} start={[50]} pips={{
        mode: 'values',
        values: [20, 80],
        density: 4
      }} tooltips={true} />
      </div>
    </ComponentContainerCard>;
};
const AllRangeSliders = () => {
  return <Row>
      <Col xl={6}>
        <DefaultSlider />
        <ClickingPipsSlider />
        <StepSlider />
      </Col>
      <Col xl={6}>
        <SliderWithTooltip />
        <ToggleSlider />
        <SoftLimitSlider />
      </Col>
    </Row>;
};
export default AllRangeSliders;