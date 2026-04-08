import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { colorVariants } from '@/context/constants';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
const CustomTooltip = () => {
  return <ComponentContainerCard title="Custom tooltips" description={<p className="text-muted mb-0">
          You can customize the appearance of tooltips using CSS variables. We set a custom class with data-bs-custom-class=&quot;custom-tooltip&quot;
          to scope our custom appearance and use it to override a local CSS variable.
        </p>}>
      <OverlayTrigger placement="top" overlay={<Tooltip className="danger-tooltip">This top tooltip is themed via CSS variables.</Tooltip>}>
        <Button variant="danger" type="button" className="btn btn-danger">
          Custom tooltip
        </Button>
      </OverlayTrigger>
    </ComponentContainerCard>;
};
const Directions = () => {
  return <ComponentContainerCard title="Directions" description={<p className="text-muted fs-14 mb-0">
          Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap
          in RTL.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        <OverlayTrigger overlay={<Tooltip className="primary-tooltip">Tooltip on top</Tooltip>}>
          <Button variant="primary" type="button">
            Tooltip on top
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={<Tooltip className="danger-tooltip">Tooltip on right</Tooltip>}>
          <Button variant="danger" type="button">
            Tooltip on right
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={<Tooltip className="info-tooltip">Tooltip on bottom</Tooltip>}>
          <Button variant="info" type="button">
            Tooltip on bottom
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={<Tooltip className="success-tooltip">Tooltip on left</Tooltip>}>
          <Button variant="success" type="button">
            Tooltip on left
          </Button>
        </OverlayTrigger>
      </div>
    </ComponentContainerCard>;
};
const ColorTooltips = () => {
  return <ComponentContainerCard title="Color Tooltips" description={<p className="text-muted fs-14 mb-0">
          We set a custom class with ex. <code>data-bs-custom-class=&quot;primary-tooltip&quot;</code> to scope our background-color primary
          appearance and use it to override a local CSS variable.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.slice(0, 8).map((color, idx) => {
        return <OverlayTrigger placement="top" key={idx} overlay={<Tooltip className={`${color}-tooltip`}>This top tooltip is themed via CSS variables.</Tooltip>}>
              <Button variant={color} type="button">
                Primary tooltip
              </Button>
            </OverlayTrigger>;
      })}
      </div>
    </ComponentContainerCard>;
};
const Tooltips = () => {
  return <>
      <PageTitle title="Tooltips" />
      <Row>
        <Col xl={6}>
          <CustomTooltip />
        </Col>
        <Col xl={6}>
          <Directions />
          <ColorTooltips />
        </Col>
      </Row>
    </>;
};
export default Tooltips;