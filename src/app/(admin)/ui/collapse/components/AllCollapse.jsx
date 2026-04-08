import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
const DefaultExample = () => {
  const {
    isTrue,
    toggle
  } = useToggle();
  return <ComponentContainerCard title="Collapse" description={<p className="text-muted mb-0">
          Bootstrap&apos;s collapse provides the way to toggle the visibility of any content or element. Please read the official
          <a href="https://getbootstrap.com/docs/5.2/components/collapse/" target="_blank">
            Bootstrap
          </a>
          documentation for a full list of options.
        </p>}>
      <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={toggle}>
          Link with href
        </a>
      </p>
      <Collapse in={isTrue}>
        <div>
          <Card className="card-body mb-0">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </div>
      </Collapse>
    </ComponentContainerCard>;
};
const HorizontalCollapse = () => {
  const {
    isTrue,
    toggle
  } = useToggle();
  return <ComponentContainerCard title="Collapse Horizontal" description={<p className="text-muted mb-0">
          The collapse plugin also supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the
          <code>width</code> instead of <code>height</code> and set a<code>width</code> on the immediate child element.
        </p>}>
      <p>
        <Button variant="primary" onClick={toggle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Toggle width collapse
        </Button>
      </p>
      <div style={{
      minHeight: 112
    }}>
        <Collapse dimension="width" in={isTrue}>
          <div>
            <Card className="card-body mb-0" style={{
            width: 300
          }}>
              This is some placeholder content for a horizontal collapse. It&apos;s hidden by default and shown when triggered.
            </Card>
          </div>
        </Collapse>
      </div>
    </ComponentContainerCard>;
};
const MultipleTargetsCollapse = () => {
  const {
    isTrue: isOpenFirst,
    toggle: toggleFirst
  } = useToggle(false);
  const {
    isTrue: isOpenSecond,
    toggle: toggleSecond
  } = useToggle(false);
  const toggleBoth = () => {
    toggleFirst();
    toggleSecond();
  };
  return <ComponentContainerCard title="Multiple toggles and targets" description={<p className="text-muted mb-0">
          Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide an element if they each reference it with their
          <code>href</code> or
          <code>data-bs-target</code> attribute
        </p>}>
      <div className="icons-center gap-1">
        <a className="btn btn-primary" href="#multiCollapseExample1" role="button" onClick={toggleFirst}>
          Toggle first element
        </a>
        <Button variant="primary" type="button" onClick={toggleSecond}>
          Toggle second element
        </Button>
        <Button variant="primary" type="button" onClick={toggleBoth}>
          Toggle both elements
        </Button>
      </div>
      <Row>
        <Col>
          <Collapse in={isOpenFirst} className="multi-collapse">
            <div>
              <Card className="card-body mb-0 mt-2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
        <Col>
          <Collapse in={isOpenSecond} className="multi-collapse">
            <div>
              <Card className="card-body mb-0 mt-2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const AllCollapse = () => {
  return <>
      <Row>
        <Col xl={6}>
          <DefaultExample />
        </Col>
        <Col xl={6}>
          <HorizontalCollapse />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <MultipleTargetsCollapse />
        </Col>
      </Row>
    </>;
};
export default AllCollapse;