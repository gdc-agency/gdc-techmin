import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { colorVariants } from '@/context/constants';
import { toSentenceCase } from '@/utils/change-casing';
import { Fragment } from 'react';
import { Button, ButtonGroup, Col, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const SingleButtonDropdown = () => {
  return <ComponentContainerCard title="Single button dropdowns" description={<>
          Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here&apos;s how you can put them to work with
          either <code>&lt;button&gt;</code> elements.
        </>}>
      <Row>
        <Col xs="auto">
          <Dropdown>
            <DropdownToggle variant="light" className="icons-center gap-1">
              Dropdown button
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem href="">Action</DropdownItem>
              <DropdownItem href="">Another action</DropdownItem>
              <DropdownItem href="">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>

        <Col xs="auto">
          <Dropdown>
            <DropdownToggle variant="secondary" className="icons-center gap-1">
              Dropdown link
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="">Action</DropdownItem>
              <DropdownItem href="">Another action</DropdownItem>
              <DropdownItem href="">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const DropdownVariant = () => {
  return <ComponentContainerCard title="Variant" description={<p className="text-muted mb-0">The best part is you can do this with any button variant, too:</p>}>
      <div className="icons-center gap-1 flex-wrap">
        {colorVariants.slice(0, 9).map((color, idx) => <Dropdown className="mb-2" key={idx}>
            <DropdownToggle as="a" type="button" className={`btn btn-${color}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {toSentenceCase(color)}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="">Action</DropdownItem>
              <DropdownItem href="">Another action</DropdownItem>
              <DropdownItem href="">Something else here</DropdownItem>
              <DropdownDivider />
              <DropdownItem href="">Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>)}
      </div>
    </ComponentContainerCard>;
};
const AnimatedDropdown = () => {
  return <ComponentContainerCard title="Animated Dropdown" description={<p className="text-muted mb-0">
          Add <code>.dropdown-menu-animated</code>
          to a <code>.dropdown-menu</code> to have animated dropdown menu.
        </p>}>
      <Dropdown className="btn-group">
        <DropdownToggle variant="light" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="animated-preview">
          Animated Dropdown
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-animated">
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropupDropdown = () => {
  return <ComponentContainerCard title="Dropup variation" description={<p className="text-muted mb-0">
          Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent element.
        </p>}>
      <Dropdown drop="up" className="btn-group me-1">
        <DropdownToggle variant="light" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropup
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown drop="up" className="btn-group">
        <Button variant="light" type="button">
          Split dropup
        </Button>
        <DropdownToggle variant="light" split type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropendDropdown = () => {
  return <ComponentContainerCard title="Dropend variation" description={<p className="text-muted mb-0">
          Trigger dropdown menus at the right of the elements by adding <code>.dropend</code> to the parent element.
        </p>}>
      <Dropdown drop="end" className="btn-group me-1">
        <DropdownToggle variant="primary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropup
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown drop="end" className="btn-group">
        <Button variant="primary" type="button">
          Split dropend
        </Button>
        <DropdownToggle variant="primary" split type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DisableDropdown = () => {
  return <ComponentContainerCard title="Disabled Item" description={<p className="text-muted mb-0">
          Add <code>.disabled</code> to items in the dropdown to <strong>style them as disabled</strong>.
        </p>}>
      <Dropdown className="btn-group">
        <DropdownToggle variant="primary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Disabled
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Regular link</DropdownItem>
          <DropdownItem disabled href="" tabIndex={-1} aria-disabled="true">
            Disabled link
          </DropdownItem>
          <DropdownItem href="">Another link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DarkDropdown = () => {
  return <ComponentContainerCard title="Dark dropdowns" description={<p className="text-muted mb-0">
          Opt into darker dropdowns to match a dark navbar or custom style by adding <code>.dropdown-menu-dark</code> onto an existing
          <code>.dropdown-menu</code>. No changes are required to the dropdown items.
        </p>}>
      <Dropdown>
        <DropdownToggle variant="secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </DropdownToggle>
        <DropdownMenu variant="dark" className="dropdown-menu-dark">
          <li>
            <DropdownItem active href="">
              Action
            </DropdownItem>
          </li>
          <li>
            <DropdownItem href="">Another action</DropdownItem>
          </li>
          <li>
            <DropdownItem href="">Something else here</DropdownItem>
          </li>
          <li>
            <DropdownDivider />
          </li>
          <li>
            <DropdownItem href="">Separated link</DropdownItem>
          </li>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropdownOption = () => {
  return <ComponentContainerCard title="Dropdown options" description={<p className="text-muted mb-0">
          Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdown.
        </p>}>
      <div className="d-flex">
        <Dropdown className="me-1">
          <DropdownToggle type="button" variant="secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
            Offset
          </DropdownToggle>
          <DropdownMenu>
            <li>
              <DropdownItem href="">Action</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Another action</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Something else here</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const TextDropdown = () => {
  return <ComponentContainerCard title="Text" description={<p className="text-muted mb-0">
          Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll likely need additional sizing styles to
          constrain the menu width.
        </p>}>
      <Dropdown className="btn-group">
        <DropdownToggle variant="primary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Text Dropdown
        </DropdownToggle>
        <DropdownMenu className="p-3 text-muted" style={{
        maxWidth: 200
      }}>
          <p>Some example text that&apos;s free-flowing within the dropdown menu.</p>
          <p className="mb-0">And this is more example text.</p>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const MenuAlignDropdown = () => {
  return <ComponentContainerCard title="Menu alignment" description={<p className="text-muted mb-0">
          Add <code>.dropdown-menu-end</code>
          to a <code>.dropdown-menu</code> to right align the dropdown menu.
        </p>}>
      <Dropdown>
        <DropdownToggle variant="light" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Right-aligned menu
        </DropdownToggle>
        <DropdownMenu align="end" className="dropdown-menu-end">
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const SplitButtonDropdown = () => {
  return <ComponentContainerCard title="Split button dropdowns" description={<p className="text-muted mb-0">
          Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of
          <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
        </p>}>
      <div className="icons-center gap-1 flex-wrap">
        {colorVariants.slice(0, 9).map((color, idx) => <Dropdown className="btn-group mb-2" key={idx}>
            <Button variant={color} type="button">
              {toSentenceCase(color)}
            </Button>
            <DropdownToggle variant={color} split type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="">Action</DropdownItem>
              <DropdownItem href="">Another action</DropdownItem>
              <DropdownItem href="">Something else here</DropdownItem>
              <DropdownDivider />
              <DropdownItem href="">Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>)}
      </div>
    </ComponentContainerCard>;
};
const DropStartDropdown = () => {
  return <ComponentContainerCard title="Dropstart variation" description={<p className="text-muted mb-0">
          Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.
        </p>}>
      <Dropdown drop="start" className="btn-group me-1">
        <DropdownToggle variant="secondary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Drostart
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown drop="start" className="btn-group">
        <DropdownToggle variant="secondary" split type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </DropdownToggle>
        <Button variant="secondary" type="button">
          Split drostart
        </Button>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropdownSizing = () => {
  const dropdownSize = ['lg', 'sm'];
  return <ComponentContainerCard title="Sizing" description={<p className="text-muted mb-0">Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>}>
      <div className="icons-center gap-1 flex-wrap">
        {dropdownSize.map((size, idx) => <Fragment key={idx}>
            <Dropdown className="btn-group">
              <DropdownToggle variant="light" size={size} type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {size === 'lg' ? 'Large' : 'Small'} button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="">Action</DropdownItem>
                <DropdownItem href="">Another action</DropdownItem>
                <DropdownItem href="">Something else here</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="">Separated link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="btn-group">
              <Button variant="light" size={size} type="button">
                {size === 'lg' ? 'Large' : 'Small'} button
              </Button>
              <DropdownToggle split variant="light" type="button" size={size} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="">Action</DropdownItem>
                <DropdownItem href="">Another action</DropdownItem>
                <DropdownItem href="">Something else here</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="">Separated link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Fragment>)}
      </div>
    </ComponentContainerCard>;
};
const ActiveItemDropdown = () => {
  return <ComponentContainerCard title="Active Item" description={<p className="text-muted mb-0">
          Add <code>.active</code> to item in the dropdown to <strong>style them as active</strong>.
        </p>}>
      <Dropdown className="btn-group">
        <DropdownToggle type="button" variant="secondary" aria-haspopup="true" aria-expanded="false">
          Active Item
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Regular link</DropdownItem>
          <DropdownItem active href="">
            Active link
          </DropdownItem>
          <DropdownItem href="">Another link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const HeaderDropdown = () => {
  return <ComponentContainerCard title="Headers" description={<p className="text-muted mb-0">Add a header to label sections of actions in any dropdown menu.</p>}>
      <Dropdown className="btn-group">
        <DropdownToggle type="button" variant="secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Header
        </DropdownToggle>
        <DropdownMenu>
          <DropdownHeader as="h6">Dropdown header</DropdownHeader>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const CenteredDropdown = () => {
  return <ComponentContainerCard title="Centered dropdowns" description={<p className="text-muted mb-0">
          Make the dropdown menu centered below the toggle with <code>.dropdown-center</code> on the parent element.
        </p>}>
      <div className="hstack gap-2">
        <Dropdown drop="down-centered">
          <DropdownToggle variant="secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Centered dropdown
          </DropdownToggle>
          <DropdownMenu>
            <li>
              <DropdownItem href="">Action</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Action two</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Action three</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown drop="up-centered">
          <DropdownToggle variant="secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Centered dropup
          </DropdownToggle>
          <DropdownMenu>
            <li>
              <DropdownItem href="">Action</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Action two</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Action three</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const AutoCloseBehaviorDropdown = () => {
  return <ComponentContainerCard title="Auto close behavior" description={<p className="text-muted mb-0">
          By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to
          change this behavior of the dropdown.
        </p>}>
      <div className="hstack gap-2">
        <Dropdown autoClose as={ButtonGroup}>
          <DropdownToggle variant="secondary" className="icons-center gap-1">
            Default dropdown
          </DropdownToggle>
          <DropdownMenu as="ul">
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>

        <Dropdown autoClose="outside" as={ButtonGroup}>
          <DropdownToggle variant="secondary" className="icons-center gap-1">
            Clickable outside
          </DropdownToggle>
          <DropdownMenu as="ul">
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>

        <Dropdown autoClose="inside" as={ButtonGroup}>
          <DropdownToggle variant="secondary" className="icons-center gap-1">
            Clickable inside
          </DropdownToggle>
          <DropdownMenu as="ul">
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>

        <Dropdown autoClose="inside" as={ButtonGroup}>
          <DropdownToggle variant="secondary" className="icons-center gap-1" type="button">
            Manual close
          </DropdownToggle>
          <DropdownMenu as="ul">
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
            <li>
              <DropdownItem href="">Menu item</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const DropdownWithForm = () => {
  return <ComponentContainerCard title="Forms" description={<p className="text-muted mb-0">
          Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you
          require.
        </p>}>
      <Dropdown>
        <DropdownToggle variant="secondary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Form
        </DropdownToggle>
        <DropdownMenu>
          <form className="px-4 py-3">
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
            </div>
            <div className="mb-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </form>
          <DropdownDivider />
          <DropdownItem href="">New around here? Sign up</DropdownItem>
          <DropdownItem href="">Forgot password?</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const Dropdowns = () => {
  return <>
      <PageTitle title="Dropdowns" />
      <Row>
        <Col xl={6}>
          <SingleButtonDropdown />
          <DropdownVariant />
          <AnimatedDropdown />
          <DropupDropdown />
          <DropendDropdown />
          <DisableDropdown />
          <DarkDropdown />
          <DropdownOption />
          <TextDropdown />
        </Col>
        <Col xl={6}>
          <MenuAlignDropdown />
          <SplitButtonDropdown />
          <DropdownSizing />
          <DropStartDropdown />
          <ActiveItemDropdown />
          <HeaderDropdown />
          <CenteredDropdown />
          <AutoCloseBehaviorDropdown />
          <DropdownWithForm />
        </Col>
      </Row>
    </>;
};
export default Dropdowns;