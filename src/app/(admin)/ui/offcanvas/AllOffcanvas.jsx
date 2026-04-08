import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { Offcanvas as BootstrapOffcanvas, Button, Col, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OffCanvasBackdrop = ({
  name,
  ...props
}) => {
  const {
    isTrue: isOpen,
    toggle: toggle
  } = useToggle();
  return <>
      <Button variant="primary" onClick={toggle} className="mt-md-0">
        {name}
      </Button>

      <BootstrapOffcanvas show={isOpen} onHide={toggle} {...props} className="offcanvas-start">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle as="h5">{name}</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
          <h5 className="mt-3">List</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>

          <ul className="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
          </ul>
        </OffcanvasBody>
      </BootstrapOffcanvas>
    </>;
};
const OffcanvasPlacement = ({
  name,
  ...props
}) => {
  const {
    isTrue: isOpen,
    toggle: toggle
  } = useToggle();
  return <>
      <Button variant="primary" onClick={toggle} className="mt-md-0">
        
        Toggle {name} offcanvas
      </Button>
      <BootstrapOffcanvas show={isOpen} onHide={toggle} {...props}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Offcanvas {name}</OffcanvasTitle>
        </OffcanvasHeader>

        <OffcanvasBody>
          <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
          <h5 className="mt-3">List</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>
        </OffcanvasBody>
      </BootstrapOffcanvas>
    </>;
};
const LinkOffcanvas = () => {
  const {
    isTrue: isOpen,
    toggle: toggle
  } = useToggle();
  return <ComponentContainerCard title="Offcanvas" description={<p className="text-muted mb-0">
          You can use a link with the <code>href</code> attribute, or a button with the <code>data-bs-target</code> attribute. In both cases, the
          <code>data-bs-toggle=&quot;offcanvas&quot;</code> is required.
        </p>}>
      <Link className="btn btn-primary" onClick={toggle} to="" role="button">
        Link with href
      </Link>

      <BootstrapOffcanvas show={isOpen} onHide={toggle} className="offcanvas-start" tabIndex={-1}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle as="h5">Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody className="offcanvas-body">
          <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
          <h5 className="mt-3">List</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>

          <ul className="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
          </ul>
        </OffcanvasBody>
      </BootstrapOffcanvas>
    </ComponentContainerCard>;
};
const OffcanvasPlacementExamples = () => {
  const placementOptions = [{
    name: 'Top',
    placement: 'top'
  }, {
    name: 'right',
    placement: 'end'
  }, {
    name: 'bottom',
    placement: 'bottom'
  }, {
    name: 'Left',
    placement: 'start'
  }];
  return <ComponentContainerCard title="Offcanvas Placement" description={<p className="text-muted mb-0">Try the right and bottom examples out below.</p>}>
      <ul className="text-muted">
        <li>
          <code>.offcanvas-start</code> places offcanvas on the left of the viewport (shown above)
        </li>
        <li>
          <code>.offcanvas-end</code> places offcanvas on the right of the viewport
        </li>
        <li>
          <code>.offcanvas-top</code> places offcanvas on the top of the viewport
        </li>
        <li>
          <code>.offcanvas-bottom</code> places offcanvas on the bottom of the viewport
        </li>
      </ul>
      <div className="icons-center flex-wrap gap-2">
        {placementOptions.map((option, idx) => <OffcanvasPlacement key={idx} placement={option.placement} name={option.name} />)}
      </div>
    </ComponentContainerCard>;
};
const OffcanvasWithBackdrop = () => {
  const options = [{
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false
  }, {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true
  }, {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true
  }];
  return <ComponentContainerCard title="Offcanvas Backdrop" description={<p className="text-muted mb-0">
          Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the
          <code>data-bs-scroll</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>data-bs-backdrop</code> to toggle the
          backdrop.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        {(options || []).map((props, idx) => <OffCanvasBackdrop key={idx} {...props} />)}
      </div>
    </ComponentContainerCard>;
};
const DarkOffcanvas = () => {
  const {
    isTrue: isOpen,
    toggle: toggle
  } = useToggle();
  return <ComponentContainerCard title="Dark Offcanvas" description={<p className="text-muted mb-0">
          Change the appearance of offcanvases with utilities to better match them to different contexts like dark navbars. Here we add
          <code>.text-bg-dark</code> to the <code>.offcanvas</code> and <code>.btn-close-white</code> to <code>.btn-close</code> for proper styling
          with a dark offcanvas. If you have dropdowns within, consider also adding <code>.dropdown-menu-dark</code> to <code>.dropdown-menu</code>.
        </p>}>
      <Button variant="primary" onClick={toggle} className="mt-2 mt-md-0">
        Dark offcanvas
      </Button>

      <BootstrapOffcanvas show={isOpen} onHide={toggle} className="offcanvas-start text-bg-dark">
        <OffcanvasHeader closeButton closeVariant="white">
          <OffcanvasTitle as="h5">Dark Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>

        <OffcanvasBody>
          <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
          <h5 className="mt-3">List</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>
        </OffcanvasBody>
      </BootstrapOffcanvas>
    </ComponentContainerCard>;
};
const AllOffcanvas = () => {
  return <Row>
      <Col xl={6}>
        <LinkOffcanvas />
        <OffcanvasWithBackdrop />
      </Col>
      <Col xl={6}>
        <OffcanvasPlacementExamples />
        <DarkOffcanvas />
      </Col>
    </Row>;
};
export default AllOffcanvas;