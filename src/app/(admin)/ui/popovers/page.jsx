import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Button, Col, OverlayTrigger, Popover, PopoverBody, PopoverHeader, Row } from 'react-bootstrap';
const Basic = () => {
  const basicPopover = <Popover id="popover-basic">
      <PopoverHeader as="h3">Popover title</PopoverHeader>
      <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
    </Popover>;
  return <ComponentContainerCard title="Simple Popover" description={<p className="text-muted mb-0">
          Popover is a component which displays a box with a content after a click on an element - similar to the tooltip but can contain more
          content.
        </p>}>
      <OverlayTrigger trigger="click" placement="right" overlay={basicPopover}>
        <Button variant="danger">Click to toggle popover</Button>
      </OverlayTrigger>
    </ComponentContainerCard>;
};
const DimissibleOnClick = () => {
  const dismissiblePopover = <Popover>
      <PopoverHeader as="h3">Dismissible popover</PopoverHeader>
      <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
    </Popover>;
  return <ComponentContainerCard title="Dismiss on Next Click" description={<p className="text-muted mb-0">
          Use the <code>focus</code> trigger to dismiss popovers on the user&apos;s next click of a different element than the toggle element.
        </p>}>
      <OverlayTrigger trigger="focus" placement="right" overlay={dismissiblePopover}>
        <Button variant="success">Dismissible popover</Button>
      </OverlayTrigger>
    </ComponentContainerCard>;
};
const HoverPopover = () => {
  const hoverPopover = <Popover>
      <PopoverHeader as="h3">Ohh Wow !</PopoverHeader>
      <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
    </Popover>;
  return <ComponentContainerCard title="Hover" description={<p className="text-muted mb-0">
          Use the attribute <code>data-bs-trigger=&quot;hover&quot;</code>
          &nbsp;to show the popover on hovering the element.
        </p>}>
      <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={hoverPopover}>
        <Button variant="dark"> Please Hover Me</Button>
      </OverlayTrigger>
    </ComponentContainerCard>;
};
const Direction = () => {
  const directions = [{
    placement: 'top'
  }, {
    placement: 'bottom'
  }, {
    placement: 'right'
  }, {
    placement: 'left'
  }];
  return <ComponentContainerCard title="Four Directions" description={<p className="text-muted mb-0">Four options are available: top, right, bottom, and left aligned.</p>}>
      <div className="icons-center gap-1 flex-wrap">
        {(directions || []).map((direction, idx) => <OverlayTrigger trigger="click" key={idx} placement={direction.placement} overlay={<Popover id={`popover-positioned-${direction.placement}`}>
                <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
              </Popover>}>
            <Button variant="primary">Popover on {direction.placement}</Button>
          </OverlayTrigger>)}
      </div>
    </ComponentContainerCard>;
};
const DisabledPopover = () => {
  const disabledPopover = <Popover>
      <PopoverBody>Disabled popover</PopoverBody>
    </Popover>;
  return <ComponentContainerCard title="Disabled Elements" description={<p className="text-muted mb-0">
          Elements with the <code>disabled</code> attribute aren&apos;t interactive, meaning users cannot hover or click them to trigger a popover (or
          tooltip). As a workaround, you&apos;ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and
          override the <code>pointer-events</code> on the disabled element.
        </p>}>
      <OverlayTrigger placement="right" overlay={disabledPopover}>
        <span className="d-inline-block">
          <Button disabled style={{
          pointerEvents: 'none'
        }}>
            Disabled button
          </Button>
        </span>
      </OverlayTrigger>
    </ComponentContainerCard>;
};
const CustomPopovers = () => {
  const customPopover = variant => <Popover className={`${variant}-popover`}>
      <PopoverHeader as="h3">Primary Popover</PopoverHeader>
      <PopoverBody>This popover is themed via CSS variables.</PopoverBody>
    </Popover>;
  return <ComponentContainerCard title="Custom Popovers" description={<p className="text-muted mb-0">
          You can customize the appearance of popovers using CSS variables. We set a custom class with&nbsp;
          <code>data-bs-custom-class=&quot;primary-popover&quot;</code> to scope our custom appearance and use it to override some of the local CSS
          variables.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        <OverlayTrigger trigger="click" placement="right" overlay={customPopover('primary')}>
          <Button variant="primary">Primary popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={customPopover('success')}>
          <Button variant="success">Success popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={customPopover('danger')}>
          <Button variant="danger">Danger popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={customPopover('info')}>
          <Button variant="info">Info popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={customPopover('pink')}>
          <Button variant="pink">Pink popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={customPopover('purple')}>
          <Button variant="purple">Purple popover</Button>
        </OverlayTrigger>
      </div>
    </ComponentContainerCard>;
};
const Popovers = () => {
  return <>
      <PageTitle title="Popovers" />
      <Row>
        <Col xl={6}>
          <Basic />
          <DimissibleOnClick />
          <HoverPopover />
        </Col>
        <Col xl={6}>
          <Direction />
          <CustomPopovers />
          <DisabledPopover />
        </Col>
      </Row>
    </>;
};
export default Popovers;