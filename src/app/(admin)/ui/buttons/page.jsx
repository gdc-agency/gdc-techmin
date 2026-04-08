import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { colorVariants } from '@/context/constants';
import { toSentenceCase } from '@/utils/change-casing';
import { Button, Col, Row } from 'react-bootstrap';
const DefaultButtons = () => {
  return <ComponentContainerCard title="Default Buttons" description={<p className="text-muted mb-0">
          Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => <Button variant={color} type="button" key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const OutlineButtons = () => {
  return <ComponentContainerCard title="Button Outline" description={<p className="text-muted mb-0">
          Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => <Button type="button" variant={`outline-${color}`} key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const RoundedButtons = () => {
  return <ComponentContainerCard title="Button Rounded" description={<p className="text-muted mb-0">
          Add <code>.rounded-pill</code> to default button to get rounded corners.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.slice(0, 10).map((color, idx) => <Button variant={color} className="rounded-pill me-1" type="button" key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const OutlineRoundedButtons = () => {
  return <ComponentContainerCard title="Button Outline Rounded" description={<p className="text-muted mb-0">
          Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.slice(0, 10).map((color, idx) => <Button type="button" variant={`outline-${color}`} className="rounded-pill" key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const ButtonSizes = () => {
  return <ComponentContainerCard title="Button Sizes" description={<p className="text-muted mb-0">
          Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional sizes.
        </p>}>
      <div className="d-flex flex-wrap align-items-center gap-2">
        <button type="button" className="btn btn-primary btn-lg">
          Large
        </button>
        <button type="button" className="btn btn-info">
          Normal
        </button>
        <button type="button" className="btn btn-success btn-sm">
          Small
        </button>
      </div>
      <div className="d-flex flex-wrap align-items-center mt-3 gap-2">
        <button type="button" className="btn btn-primary btn-sm">
          Small button
        </button>
        <button type="button" className="btn btn-secondary btn-sm">
          Small button
        </button>
      </div>
    </ComponentContainerCard>;
};
const DisableButtons = () => {
  return <ComponentContainerCard title="Button Disabled" description={<p className="text-muted mb-0">
          Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="info" type="button" disabled>
          Info
        </Button>
        <Button variant="success" type="button" disabled>
          Success
        </Button>
        <Button variant="danger" type="button" disabled>
          Danger
        </Button>
        <Button variant="dark" type="button" disabled>
          Dark
        </Button>
      </div>
    </ComponentContainerCard>;
};
const IconButtons = () => {
  return <ComponentContainerCard title="Icon Buttons" description={<p className="text-muted mb-0">Icon only button.</p>}>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="light" type="button">
          <IconifyIcon icon="mdi:cards-heart-outline" />
        </Button>
        <Button variant="danger" type="button">
          <IconifyIcon icon="mdi:window-closed-variant" />
        </Button>
        <Button variant="dark" type="button">
          <IconifyIcon icon="mdi:music-note-eighth" />
        </Button>
        <Button variant="primary" type="button">
          <IconifyIcon icon="mdi:shield-star" />
        </Button>
        <Button variant="success" type="button">
          <IconifyIcon icon="mdi:thumb-up-outline" />
        </Button>
        <Button variant="info" type="button">
          <IconifyIcon icon="mdi:keyboard-outline" />
        </Button>
        <Button variant="warning" type="button">
          <IconifyIcon icon="mdi:town-hall" />
        </Button>
        <Button variant="light" type="button">
          <IconifyIcon icon="mdi:heart-multiple" className="me-1" /> <span>Like</span>
        </Button>
        <Button variant="warning" type="button">
          <IconifyIcon icon="mdi:rocket" className="me-1" /> <span>Launch</span>
        </Button>
        <Button variant="info" type="button">
          <IconifyIcon icon="mdi:cloud-check-variant-outline" className="me-1" /> <span>Cloud Hosting</span>
        </Button>
        <Button variant="outline-success" type="button">
          <IconifyIcon icon="mdi:currency-gbp" className="me-1" /> Money
        </Button>
        <Button variant="outline-primary" type="button">
          <IconifyIcon icon="mdi:alpha-p-circle" className="me-1" /> PayPal
        </Button>
        <Button variant="outline-danger" type="button">
          <IconifyIcon icon="mdi:tune-variant" className="me-1" /> Settings
        </Button>
      </div>
    </ComponentContainerCard>;
};
const BlockButtons = () => {
  return <ComponentContainerCard title="Block Button" description={<p className="text-muted mb-0">
          Create block level buttons by adding class <code>.d-grid</code> to parent div.
        </p>}>
      <div className="d-grid gap-2">
        <Button type="button" variant="primary" size="sm">
          Block Button
        </Button>
        <Button type="button" variant="success" size="lg">
          Block Button
        </Button>
      </div>
    </ComponentContainerCard>;
};
const ToggleButton = () => {
  return <ComponentContainerCard title="Toggle Button" description={<p className="text-muted mb-0">
          Add <code>data-bs-toggle=&quot;button&quot;</code> to toggle a button’s <code>active</code> state. If you’re pre-toggling a button, you must
          manually add the <code>.active</code> class <strong>and</strong> <code>aria-pressed=&quot;true&quot;</code> to ensure that it is conveyed
          appropriately to assistive technologies.
        </p>}>
      <Button variant="primary" data-bs-toggle="button">
        Toggle button
      </Button>
      <Button variant="primary" className="active mx-1">
        Active toggle button
      </Button>
      <Button variant="primary" disabled>
        Disabled toggle button
      </Button>
    </ComponentContainerCard>;
};
const TagButtons = () => {
  return <ComponentContainerCard title="Button tags" description={<p className="text-muted mb-0">
          The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes
          on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).
        </p>}>
      <div className="icons-center gap-1 flex-wrap">
        <Button as="a" variant="primary" role="button">
          Link
        </Button>
        <Button variant="primary" type="submit">
          Button
        </Button>
        <Button as="input" type="button" value="Input" />
        <Button as="input" type="submit" value="Submit" />
        <Button as="input" type="reset" value="Reset" />
      </div>
    </ComponentContainerCard>;
};
const Buttons = () => {
  return <>
      <PageTitle title="Buttons" />
      <Row>
        <Col xl={6}>
          <DefaultButtons />
        </Col>
        <Col xl={6}>
          <OutlineButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <RoundedButtons />
        </Col>
        <Col xl={6}>
          <OutlineRoundedButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ButtonSizes />
        </Col>
        <Col xl={6}>
          <DisableButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <IconButtons />
        </Col>
        <Col xl={6}>
          <BlockButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ToggleButton />
        </Col>
        <Col xl={6}>
          <TagButtons />
        </Col>
      </Row>
    </>;
};
export default Buttons;