import ComponentContainerCard from '@/components/ComponentContainerCard';
import { CanadaVectorMap, IraqVectorMap, ItalyVectorMap, RussiaVectorMap, SpainVectorMap, UsaVectorMap, WorldVectorMap } from '@/components/VectorMap';
import { Col, Row } from 'react-bootstrap';
import { iraqMapOpts, italyMapOpts, russiaMapOpts, spainMapOpts, usaMapOpts, worldMapOpts } from '../data';
const GlobalVectorMap = () => {
  return <ComponentContainerCard title="World Vector Map">
      <WorldVectorMap height="360px" width="100%" options={worldMapOpts} />
    </ComponentContainerCard>;
};
const USAVectorMap = () => {
  return <ComponentContainerCard title="USA Vector Map">
      <UsaVectorMap height="300px" width="100%" options={usaMapOpts} />
    </ComponentContainerCard>;
};
const RussiaMap = () => {
  return <ComponentContainerCard title="Russia Vector Map">
      <RussiaVectorMap height="300px" width="100%" options={russiaMapOpts} />
    </ComponentContainerCard>;
};
const IraqVectorMaps = () => {
  return <ComponentContainerCard title="Iraq Vector Map">
      <IraqVectorMap height="300px" width="100%" options={iraqMapOpts} />
    </ComponentContainerCard>;
};
const ItalyVectorMaps = () => {
  return <ComponentContainerCard title="Italy Vector Map">
      <ItalyVectorMap height="300px" width="100%" options={italyMapOpts} />
    </ComponentContainerCard>;
};
const CanadaVectorMaps = () => {
  return <ComponentContainerCard title="Canada Vector Map">
      <CanadaVectorMap height="300px" width="100%" options={italyMapOpts} />
    </ComponentContainerCard>;
};
const SpainVectorMaps = () => {
  return <ComponentContainerCard title="Spain Vector Map">
      <SpainVectorMap height="300px" width="100%" options={spainMapOpts} />
    </ComponentContainerCard>;
};
const AllVectorMaps = () => {
  return <>
      <Row>
        <Col xs={12}>
          <GlobalVectorMap />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <USAVectorMap />
        </Col>
        <Col xl={6}>
          <RussiaMap />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ItalyVectorMaps />
        </Col>
        <Col xl={6}>
          <CanadaVectorMaps />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <IraqVectorMaps />
        </Col>
        <Col xl={6}>
          <SpainVectorMaps />
        </Col>
      </Row>
    </>;
};
export default AllVectorMaps;