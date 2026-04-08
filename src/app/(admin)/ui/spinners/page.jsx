import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import { colorVariants } from '@/context/constants';
import { Button, Col, Row } from 'react-bootstrap';
const BorderedSpinners = () => {
  return <ComponentContainerCard title="Border Spinner" description={<p className="text-muted mb-0">Use the border spinners for a lightweight loading indicator.</p>}>
      <Spinner className="m-2" />
    </ComponentContainerCard>;
};
const ColorsSpinners = () => {
  return <ComponentContainerCard title="Colors" description={<p className="text-muted mb-0">You can use any of our text color utilities on the standard spinner.</p>}>
      {colorVariants.slice(0, 10).map((color, idx) => {
      return <Spinner key={idx} className="m-2" color={color} />;
    })}
    </ComponentContainerCard>;
};
const AlignmentSpinner = () => {
  return <ComponentContainerCard title="Alignment" description={<p className="text-muted mb-0">
          Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.
        </p>}>
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    </ComponentContainerCard>;
};
const SpinnersSizes = () => {
  const sizes = ['lg', 'md', 'sm'];
  return <ComponentContainerCard title="Size" description={<p className="text-muted mb-0">
          Add <code>.spinner-border-sm</code> and
          <code>.spinner-border.avatar-**</code> to make a smaller spinner that can quickly be used within other components.
        </p>}>
      <Row>
        {(sizes || []).map((size, idx) => {
        return <Col lg={6} key={idx}>
              <Spinner className="text-primary m-2" color="primary" size={size} />
              <Spinner className="text-secondary m-2" type="grow" size={size} />
            </Col>;
      })}
        <Col lg={6}>
          <Spinner className="spinner-border-sm m-2"></Spinner>
          <Spinner type="grow" className="spinner-grow-sm m-2"></Spinner>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const GrowingSpinners = () => {
  return <ComponentContainerCard title="Growing Spinner" description={<p className="text-muted mb-0">
          If you don&apos;t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!
        </p>}>
      <Spinner type="grow" className="m-2" />
    </ComponentContainerCard>;
};
const ColorGrowingSpinners = () => {
  return <ComponentContainerCard title="Color Growing Spinner" description={<p className="text-muted mb-0">You can use any of our text color utilities on the standard spinner.</p>}>
      {colorVariants.slice(0, 10).map((color, idx) => {
      return <Spinner key={idx} className="m-2" type="grow" color={color} />;
    })}
    </ComponentContainerCard>;
};
const PlacementSpinners = () => {
  return <ComponentContainerCard title="Placement" description={<p className="text-muted mb-0">
          Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code> utilities to place spinners exactly where
          you need them in any situation.
        </p>}>
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <Spinner className="ms-auto" />
      </div>
    </ComponentContainerCard>;
};
const ButtonSpinners = () => {
  return <ComponentContainerCard title="Buttons Spinner" description={<p className="text-muted mb-0">
          Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner
          element and utilize button text as needed.
        </p>}>
      <Row>
        <Col lg={6}>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="primary" disabled>
              <Spinner className="spinner-border-sm" tag="span" color="white" /> <span className="visually-hidden">Loading...</span>
            </Button>

            <Button variant="primary" disabled>
              <Spinner className="spinner-border-sm me-1" tag="span" color="white" />
              Loading...
            </Button>
          </div>
        </Col>

        <Col lg={6}>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="primary" disabled>
              <Spinner className="spinner-grow-sm" tag="span" color="white" type="grow" /> <span className="visually-hidden">Loading...</span>
            </Button>

            <Button variant="primary" disabled>
              <Spinner className="spinner-grow-sm me-1" tag="span" color="white" type="grow"></Spinner>
              Loading...
            </Button>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const Spinners = () => {
  return <>
      <PageTitle title="Spinners" />
      <Row>
        <Col xl={6}>
          <BorderedSpinners />
          <ColorsSpinners />
          <AlignmentSpinner />
          <SpinnersSizes />
        </Col>
        <Col xl={6}>
          <GrowingSpinners />
          <ColorGrowingSpinners />
          <PlacementSpinners />
          <ButtonSpinners />
        </Col>
      </Row>
    </>;
};
export default Spinners;