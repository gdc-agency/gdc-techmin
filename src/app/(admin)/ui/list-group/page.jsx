import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Badge, ListGroup as BootstrapListGroup, Col, FormCheck, ListGroupItem, Row } from 'react-bootstrap';
const Basic = () => {
  return <ComponentContainerCard title="Basic example" description={<p className="text-muted mb-0">
          The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with
          your own CSS as needed.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem>
          <IconifyIcon icon="ri:drive-line" className="me-1" />
          Google Drive
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:messenger-line" className="me-1" />
          Facebook Messenger
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:apple-line" className="me-1" /> Apple Technology Company
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:lifebuoy-line" className="me-1" /> Intercom Support System
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:paypal-line" className="me-1" /> Paypal Payment Gateway
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const ActiveItems = () => {
  return <ComponentContainerCard title="Active items" description={<p className="text-muted mb-0">
          Add <code>.active</code> to a<code>.list-group-item</code> to indicate the current active selection.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem active>
          <IconifyIcon icon="ri:drive-line" className="me-1" /> Google Drive
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:messenger-line" className="me-1" />
          Facebook Messenger
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:apple-line" className="me-1" /> Apple Technology Company
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:lifebuoy-line" className="me-1" /> Intercom Support System
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:paypal-line" className="me-1" /> Paypal Payment Gateway
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const DisabledItems = () => {
  return <ComponentContainerCard title="Disabled items" description={<p>
          Add <code>.disable</code> to a<code>.list-group-item</code> to make it <em>appear</em> disabled.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem disabled aria-disabled="true">
          <IconifyIcon icon="ri:drive-line" className="me-1" /> Google Drive
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:messenger-line" className="me-1" />
          Facebook Messenger
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:apple-line" className="me-1" /> Apple Technology Company
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:lifebuoy-line" className="me-1" /> Intercom Support System
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="ri:paypal-line" className="me-1" /> Paypal Payment Gateway
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const LinksButtons = () => {
  return <ComponentContainerCard title="Links and Buttons" description={<p className="text-muted mb-0">
          Use <code>&lt;a&gt;</code>s or
          <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding
          <code>.list-group-item-action</code>.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem href="#" action className="active">
          Paypal Payment Gateway
        </ListGroupItem>
        <ListGroupItem href="#" action>
          Google Drive
        </ListGroupItem>
        <ListGroupItem as="button" action>
          Facebook Messenger
        </ListGroupItem>
        <ListGroupItem as="button" action>
          Apple Technology Company
        </ListGroupItem>
        <ListGroupItem href="#" action disabled>
          Intercom Support System
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const Flush = () => {
  return <ComponentContainerCard title="Flush" description={<p className="text-muted mb-0">
          Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container
          (e.g., cards).
        </p>}>
      <BootstrapListGroup variant="flush">
        <ListGroupItem>Google Drive</ListGroupItem>
        <ListGroupItem>Facebook Messenger</ListGroupItem>
        <ListGroupItem>Apple Technology Company</ListGroupItem>
        <ListGroupItem>Intercom Support System</ListGroupItem>
        <ListGroupItem>Paypal Payment Gateway</ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const Horizontal = () => {
  return <ComponentContainerCard title="Horizontal" description={<p className="text-muted mb-0">
          Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints.
          Alternatively, choose a responsive variant
          <code>
            .list-group-horizontal-{'{'}sm|md|lg|xl{'}'}
          </code>
          to make a list group horizontal starting at that breakpoint’s <code>min-width</code>.
        </p>}>
      <BootstrapListGroup horizontal className="mb-3">
        <ListGroupItem>Google</ListGroupItem>
        <ListGroupItem>Whatsapp</ListGroupItem>
        <ListGroupItem>Facebook</ListGroupItem>
      </BootstrapListGroup>

      <BootstrapListGroup horizontal="sm" className="mb-3">
        <ListGroupItem>Apple</ListGroupItem>
        <ListGroupItem>PayPal</ListGroupItem>
        <ListGroupItem>Intercom</ListGroupItem>
      </BootstrapListGroup>

      <BootstrapListGroup horizontal="md">
        <ListGroupItem>Google</ListGroupItem>
        <ListGroupItem>Whatsapp</ListGroupItem>
        <ListGroupItem>Facebook</ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const Contextual = () => {
  return <ComponentContainerCard title="Contextual classes" description={<p className="text-muted mb-0">Use contextual classes to style list items with a stateful background and color.</p>}>
      <BootstrapListGroup>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem variant="primary">A simple primary list group item</ListGroupItem>
        <ListGroupItem variant="secondary">A simple secondary list group item</ListGroupItem>
        <ListGroupItem variant="success">A simple success list group item</ListGroupItem>
        <ListGroupItem variant="danger">A simple danger list group item</ListGroupItem>
        <ListGroupItem variant="warning">A simple warning list group item</ListGroupItem>
        <ListGroupItem variant="info">A simple info list group item</ListGroupItem>
        <ListGroupItem variant="light">A simple light list group item</ListGroupItem>
        <ListGroupItem variant="dark">A simple dark list group item</ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const ContextualLinks = () => {
  return <ComponentContainerCard title="Contextual classes with Link" description={<p className="text-muted mb-0">Use contextual classes to style list items with a stateful background and color.</p>}>
      <BootstrapListGroup>
        <ListGroupItem variant="link" as="a" href="#" action>
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem variant="primary" as="a" href="#" action>
          A simple primary list group item
        </ListGroupItem>
        <ListGroupItem variant="secondary" as="a" href="#" action>
          A simple secondary list group item
        </ListGroupItem>
        <ListGroupItem variant="success" as="a" href="#" action>
          A simple success list group item
        </ListGroupItem>
        <ListGroupItem variant="danger" as="a" href="#" action>
          A simple danger list group item
        </ListGroupItem>
        <ListGroupItem variant="warning" as="a" href="#" action>
          A simple warning list group item
        </ListGroupItem>
        <ListGroupItem variant="info" as="a" href="#" action>
          A simple info list group item
        </ListGroupItem>
        <ListGroupItem variant="light" as="a" href="#" action>
          A simple light list group item
        </ListGroupItem>
        <ListGroupItem variant="dark" as="a" href="#" action>
          A simple dark list group item
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const CustomContent = () => {
  return <ComponentContainerCard title="Custom content" description={<p className="text-muted mb-0">
          Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem as="a" href="" active action>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </ListGroupItem>
        <ListGroupItem as="a" href="#" action>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </ListGroupItem>
        <ListGroupItem href="#" action>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const Badges = () => {
  return <ComponentContainerCard title="With badges" description={<p className="text-muted mb-0">
          Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Gmail Emails
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Pending Payments
          <Badge bg="success" pill>
            2
          </Badge>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Action Needed
          <Badge bg="danger" pill>
            99+
          </Badge>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Payments Done
          <Badge bg="success" pill>
            20+
          </Badge>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Pending Payments
          <Badge bg="warning" pill>
            12
          </Badge>
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const CheckboxesAndRadios = () => {
  return <ComponentContainerCard title="Checkboxes and radios" description={<p className="text-muted mb-0">
          Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without
          <code>&lt;label&gt;</code>s, but please remember to include an
          <code>aria-label</code> attribute and value for accessibility.
        </p>}>
      <BootstrapListGroup>
        <ListGroupItem>
          <FormCheck label="First checkbox" type="checkbox" id="firstCheckbox" />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck label="Second checkbox" type="checkbox" id="secondCheckbox" />
        </ListGroupItem>
      </BootstrapListGroup>

      <BootstrapListGroup className="list-group mt-2">
        <ListGroupItem>
          <FormCheck defaultChecked label="First radio" name="radio" type="radio" />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck label="Second radio" name="radio" type="radio" />
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const Numbered = () => {
  return <ComponentContainerCard title="Numbered" description={<p className="text-muted mb-0">
          Numbers are generated by <code>counter-reset</code> on the <code>&lt;ol&gt;</code>, and then styled and placed with a<code>::before</code>
          psuedo-element on the <code>&lt;li&gt;</code> with
          <code>counter-increment</code> and <code>content</code>.
        </p>}>
      <BootstrapListGroup as="ol" className="list-group-numbered">
        <ListGroupItem as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">TechUi Admin</div>
            TechUi Admin
          </div>
          <Badge bg="primary" pill>
            865
          </Badge>
        </ListGroupItem>
        <ListGroupItem as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">TechUi React Admin</div>
            TechUi React Admin
          </div>
          <Badge bg="primary" pill>
            140
          </Badge>
        </ListGroupItem>
        <ListGroupItem as="li" className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Angular Version</div>
            Angular Version
          </div>
          <Badge bg="primary" pill>
            85
          </Badge>
        </ListGroupItem>
      </BootstrapListGroup>
    </ComponentContainerCard>;
};
const ListGroup = () => {
  return <>
      <PageTitle title="List Groups" />
      <Row>
        <Col xl={4}>
          <Basic />
        </Col>
        <Col xl={4}>
          <ActiveItems />
        </Col>
        <Col xl={4}>
          <DisabledItems />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <LinksButtons />
        </Col>
        <Col xl={4}>
          <Flush />
        </Col>
        <Col xl={4}>
          <Horizontal />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Contextual />
        </Col>
        <Col xl={4}>
          <ContextualLinks />
        </Col>
        <Col xl={4}>
          <CustomContent />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Badges />
        </Col>
        <Col xl={4}>
          <CheckboxesAndRadios />
        </Col>
        <Col xl={4}>
          <Numbered />
        </Col>
      </Row>
    </>;
};
export default ListGroup;