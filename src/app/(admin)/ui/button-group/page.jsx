import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Button, ButtonGroup, ButtonToolbar, Col, DropdownButton, DropdownItem, Row } from 'react-bootstrap';
import CheckAndRadioButtons from './components/CheckAndRadioButtons';
const BasicButtonGroup = () => {
  return <ComponentContainerCard title="Basic example" description={<p className="text-muted mb-0">Wrap a series of buttons with .btn in .btn-group.</p>}>
      <ButtonGroup role="group" aria-label="Basic example">
        <Button type="button" variant="primary">
          Left
        </Button>
        <Button type="button" variant="primary">
          Middle
        </Button>
        <Button type="button" variant="primary">
          Right
        </Button>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const MixedStyles = () => {
  return <ComponentContainerCard title="Mixed styles" description={<p className="text-muted mb-0">Wrap a series of buttons with .btn in .btn-group.</p>}>
      <ButtonGroup role="group" aria-label="Basic mixed styles example">
        <Button variant="danger" type="button">
          Left
        </Button>
        <Button variant="warning" type="button">
          Middle
        </Button>
        <Button variant="success" type="button">
          Right
        </Button>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const OutlinedStyles = () => {
  return <ComponentContainerCard title="Outlined styles" description={<p className="text-muted mb-0">Wrap a series of buttons with .btn in .btn-group.</p>}>
      <ButtonGroup role="group" aria-label="Basic outlined example">
        <Button variant="outline-primary" type="button">
          Left
        </Button>
        <Button variant="outline-primary" type="button">
          Middle
        </Button>
        <Button variant="outline-primary" type="button">
          Right
        </Button>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const ButtonToolbarExample = () => {
  return <ComponentContainerCard title="Button toolbar" description={<p className="text-muted mb-0">
          Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons,
          and more.
        </p>}>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" role="group" aria-label="First group">
          <Button variant="danger" type="button">
            1
          </Button>
          <Button variant="danger" type="button">
            2
          </Button>
          <Button variant="danger" type="button">
            3
          </Button>
          <Button variant="danger" type="button">
            4
          </Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" role="group" aria-label="Second group">
          <Button variant="warning" type="button">
            5
          </Button>
          <Button variant="warning" type="button">
            6
          </Button>
          <Button variant="warning" type="button">
            7
          </Button>
        </ButtonGroup>
        <ButtonGroup role="group" aria-label="Third group">
          <Button variant="success" type="button">
            8
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </ComponentContainerCard>;
};
const NestingButtonGroup = () => {
  return <ComponentContainerCard title="Nesting" description={<p className="text-muted mb-0">Place a .btn-group within another .btn-group when you want dropdown menus mixed with a series of buttons.</p>}>
      <ButtonGroup role="group" aria-label="Button group with nested dropdown">
        <Button>1</Button>
        <Button>2</Button>
        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
          <DropdownItem eventKey="1">Dropdown link</DropdownItem>
          <DropdownItem eventKey="2">Dropdown link</DropdownItem>
        </DropdownButton>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const VerticalButtonGroup = () => {
  return <ComponentContainerCard title="Vertical variation" description={<p className="text-muted mb-0">Make a set of buttons appear vertically stacked rather than horizontally.</p>}>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>

        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
          <DropdownItem eventKey="1">Dropdown link</DropdownItem>
          <DropdownItem eventKey="2">Dropdown link</DropdownItem>
        </DropdownButton>

        <DropdownButton drop="start" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
          <DropdownItem eventKey="1">Dropdown link</DropdownItem>
          <DropdownItem eventKey="2">Dropdown link</DropdownItem>
        </DropdownButton>

        <DropdownButton as={ButtonGroup} drop="end" title="Dropdown" id="bg-vertical-dropdown-3">
          <DropdownItem eventKey="1">Dropdown link</DropdownItem>
          <DropdownItem eventKey="2">Dropdown link</DropdownItem>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} drop="up" title="Dropdown" id="bg-vertical-dropdown-4">
          <DropdownItem eventKey="1">Dropdown link</DropdownItem>
          <DropdownItem eventKey="2">Dropdown link</DropdownItem>
        </DropdownButton>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const SizingButtonGroup = () => {
  return <ComponentContainerCard title="Sizing" description={<p className="text-muted mb-0">
          Instead of applying button sizing classes to every button in a group, just add .btn-group-* to each .btn-group, including each one when
          nesting multiple groups.
        </p>}>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="outline-primary">Left</Button>
        <Button variant="outline-primary">Middle</Button>
        <Button variant="outline-primary">Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button variant="outline-primary">Left</Button>
        <Button variant="outline-primary">Middle</Button>
        <Button variant="outline-primary">Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button variant="outline-primary">Left</Button>
        <Button variant="outline-primary">Middle</Button>
        <Button variant="outline-primary">Right</Button>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const ButtonGroups = () => {
  return <>
      <PageTitle title="Button Group" />
      <Row>
        <Col xl={6}>
          <BasicButtonGroup />
        </Col>
        <Col xl={6}>
          <MixedStyles />
        </Col>
        <Col xl={6}>
          <OutlinedStyles />
        </Col>
        <Col xl={6}>
          <CheckAndRadioButtons />
        </Col>
        <Col xl={6}>
          <ButtonToolbarExample />
        </Col>
        <Col xl={6}>
          <NestingButtonGroup />
        </Col>
        <Col xl={6}>
          <VerticalButtonGroup />
        </Col>
        <Col xl={6}>
          <SizingButtonGroup />
        </Col>
      </Row>
    </>;
};
export default ButtonGroups;