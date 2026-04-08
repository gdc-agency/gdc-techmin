import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { colorVariants } from '@/context/constants';
import { Button, CardTitle, Col, DropdownButton, DropdownDivider, DropdownItem, FloatingLabel, Form, FormCheck, FormControl, FormLabel, FormSelect, FormText, InputGroup, Row } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import InputTypes from './components/InputTypes';
const FloatingLabels = () => {
  return <ComponentContainerCard title="Floating labels" description={<p className="text-muted mb-0">
          Wrap a pair of <code>&lt;input class=&quot;form-control&quot;&gt;</code> and <code>&lt;label&gt;</code> elements in
          <code>.form-floating</code> to enable floating labels with Bootstrap&apos;s textual form fields. A <code>placeholder</code> is required on
          each <code>&lt;input&gt;</code> as our method of CSS-only floating labels uses the <code>:placeholder-shown</code> pseudo-element. Also note
          that the <code>&lt;input&gt;</code> must come first so we can utilize a sibling selector (e.g., <code>~</code>).
        </p>}>
      <Row>
        <Col lg={6}>
          <h5 className="mb-3">Example</h5>
          <FloatingLabel label="Email address" className="mb-3">
            <FormControl type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-3">
            <FormControl type="password" placeholder="Password" />
          </FloatingLabel>
          <h5 className="mb-3 mt-4">Textareas</h5>
          <FloatingLabel label="Comments">
            <FormControl as="textarea" placeholder="Leave a comment here" style={{
            height: '100px'
          }} />
          </FloatingLabel>
        </Col>

        <Col lg={6}>
          <h5 className="mb-3">Selects</h5>
          <FloatingLabel label="Works with selects" className="mb-3">
            <FormSelect aria-label="Floating label select example">
              <option defaultValue="selected">Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </FormSelect>
          </FloatingLabel>

          <h5 className="mb-3 mt-4">Layout</h5>
          <Row className="g-2">
            <Col md>
              <FloatingLabel label="Email address">
                <FormControl type="email" placeholder="name@example.com" defaultValue="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label="Works with selects">
                <FormSelect aria-label="Floating label select example">
                  <option defaultValue="selected">Open this select menu</option>
                  <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option>
                </FormSelect>
              </FloatingLabel>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const SelectAndSwitches = () => {
  return <ComponentContainerCard title="Select & Switches">
      <Row>
        <Col lg={6}>
          <CardTitle as={'h4'}>Select</CardTitle>
          <p className="text-muted fs-14">
            <code>&lt;select&gt;</code> menus need only a custom class,
            <code>.form-select</code> to trigger the custom styles.
          </p>
          <FormSelect className="mb-3">
            <option defaultValue="selected">Open this select menu</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </FormSelect>
          <FormSelect size="lg" className="mb-3">
            <option defaultValue="selected">Open this select menu</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </FormSelect>
          <FormSelect size="sm" className="mb-3">
            <option defaultValue="selected">Open this select menu</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </FormSelect>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Options
            </label>
            <FormSelect>
              <option defaultValue="selected">Choose...</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </FormSelect>
          </div>
          <div className="input-group">
            <FormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
              <option defaultValue="selected">Choose...</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </FormSelect>
            <Button variant="outline-secondary" type="button">
              Button
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          <CardTitle as={'h4'} className=".card-title mt-5 mt-lg-0">
            Switches
          </CardTitle>
          <p className="text-muted fs-14">
            A switch has the markup of a custom checkbox but uses the
            <code>.form-switch</code> class to render a toggle switch. Switches also support the <code>disabled</code> attribute.
          </p>
          <FormCheck type="switch" id="customSwitch1" label="Toggle this switch element" />
          <FormCheck type="switch" id="customSwitch2" className="mt-1" disabled label="Disabled switch element" />
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const Checkboxes = () => {
  return <ComponentContainerCard title="Checkboxes" description={<p className="text-muted mb-0">
          Each checkbox and radio <code>&lt;input&gt;</code> and <code>&lt;label&gt;</code> pairing is wrapped in a <code>&lt;div&gt;</code> to create
          our custom control. Structurally, this is the same approach as our default <code>.form-check</code>.
        </p>}>
      <h6 className="fs-15">Checkboxes</h6>
      <div className="mt-3">
        <FormCheck id="customCheck1" label="Check this custom checkbox" />
        <FormCheck id="customCheck2" label="Check this custom checkbox" />
      </div>
      <h6 className="fs-15 mt-3">Inline</h6>
      <div className="mt-2">
        <FormCheck className="form-check-inline" id="customCheck3" label="Check this custom checkbox" />
        <FormCheck className="form-check-inline" id="customCheck4" label="Check this custom checkbox" />
      </div>

      <h6 className="fs-15 mt-3">Disabled</h6>

      <div className="mt-2">
        <FormCheck defaultChecked disabled className="form-check-inline" id="customCheck5" label="Check this custom checkbox" />
        <FormCheck disabled className="form-check-inline" id="customCheck6" label="Check this custom checkbox" />
      </div>

      <h6 className="fs-15 mt-3">Colors</h6>
      {colorVariants.slice(0, 10).map((item, idx) => {
      return <FormCheck key={idx} label={`${item.charAt(0).toUpperCase() + item.slice(1)} Checkbox`} type="checkbox" id={`basic-checkbox-${idx}`} className={`mb-2 form-checkbox-${item}`} aria-label="option 1" defaultChecked />;
    })}
    </ComponentContainerCard>;
};
const Radios = () => {
  return <ComponentContainerCard title="Radios" description={<p className="text-muted mb-0">
          Each checkbox and radio <code>&lt;input&gt;</code> and <code>&lt;label&gt;</code> pairing is wrapped in a <code>&lt;div&gt;</code> to create
          our custom control. Structurally, this is the same approach as our default <code>.form-check</code>.
        </p>}>
      <h6 className="fs-15 mt-3">Radios</h6>
      <div className="mt-3">
        <FormCheck type="radio" id="customRadio1" name="customradio1" label="Toggle this custom radio" />
        <FormCheck type="radio" id="customRadio2" name="customradio1" label="Or toggle this other custom radio" />
      </div>

      <h6 className="fs-15 mt-3">Inline</h6>

      <div className="mt-2">
        <FormCheck inline type="radio" id="customRadio3" name="customradio2" label="Toggle this custom radio" />
        <FormCheck inline type="radio" id="customRadio4" name="customradio2" label="Or toggle this other custom radio" />
      </div>

      <h6 className="fs-15 mt-3">Disabled</h6>

      <div className="mt-2">
        <FormCheck inline type="radio" id="customRadio5" name="customradio3" label="Toggle this custom radio" disabled />
        <FormCheck inline defaultChecked type="radio" id="customRadio6" name="customradio3" label="Or toggle this other custom radio" disabled />
      </div>

      <h6 className="fs-15 mt-3">Colors</h6>
      {colorVariants.slice(0, 10).map((item, idx) => {
      return <FormCheck key={idx} label={`${item.charAt(0).toUpperCase() + item.slice(1)} Radio`} type="radio" id={`basic-radio-${idx}`} className={`mb-2 form-radio-${item}`} aria-label="option 1" defaultChecked />;
    })}
    </ComponentContainerCard>;
};
const InputSizes = () => {
  return <ComponentContainerCard title="Input Sizes" description={<p className="text-muted mb-0">
          Set heights using classes like <code>.input-lg</code>, and set widths using grid column classes like <code>.col-lg-*</code>.
        </p>}>
      <div className="form">
        <div className="form-group mb-3">
          <FormLabel htmlFor="small">Small</FormLabel>
          <FormControl type="text" name="small" id="small1" placeholder=".input-sm" size="sm" />
        </div>

        <div className="form-group mb-3">
          <FormLabel htmlFor="small">Normal</FormLabel>
          <FormControl type="text" name="Normal" id="Normal" placeholder="Normal" />
        </div>

        <div className="form-group mb-3">
          <FormLabel htmlFor="small">Large</FormLabel>
          <FormControl type="text" name="Large" id="Large" placeholder=".input-lg" size="lg" />
        </div>

        <div className="mb-2">
          <label htmlFor="example-gridsize" className="form-label">
            Grid Sizes
          </label>
          <Row>
            <Col sm={4}>
              <FormControl type="text" name="text" id="Large1" placeholder=".col-sm-4" />
            </Col>
          </Row>
        </div>
      </div>
    </ComponentContainerCard>;
};
const InputGroups = () => {
  return <ComponentContainerCard title="Input Group" description={<p className="text-muted mb-0">
          Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file
          inputs
        </p>}>
      <Form>
        <div className="mb-3">
          <FormLabel className="form-label">Static</FormLabel>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <FormControl type="text" name="username" id="small" placeholder="Username" />
          </div>
        </div>

        <div className="form-group mb-3">
          <FormLabel htmlFor="Dropdown">Dropdowns</FormLabel>
          <InputGroup className="mb-3">
            <DropdownButton variant="primary" title="Dropdown" id="input-group-dropdown-1">
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
              <DropdownDivider />
              <DropdownItem href="#">Separated link</DropdownItem>
            </DropdownButton>
            <FormControl aria-label="Text input with dropdown button" />
          </InputGroup>
        </div>

        <div className="form-group">
          <FormLabel htmlFor="Button">Buttons</FormLabel>
          <InputGroup className="mb-3">
            <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <Button variant="dark" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
        <Row className="g-2">
          <Col sm={6}>
            <div className="form-group">
              <FormLabel htmlFor="file">File input</FormLabel>
              <FormControl type="file" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="form-group">
              <FormLabel htmlFor="formFileMultiple01">Multiple files input</FormLabel>
              <FormControl type="file" multiple />
            </div>
          </Col>
        </Row>
      </Form>
    </ComponentContainerCard>;
};
const DefaultForm = () => {
  return <ComponentContainerCard title="Basic Example" description={<p className="text-muted mb-0">
          Here&apos;s a quick example to demonstrate Bootstrap&apos;s form styles. Keep reading for documentation on required classes, form layout,
          and more.
        </p>}>
      <Form>
        <div className="form-group mb-3">
          <FormLabel htmlFor="exampleEmail2">Email address</FormLabel>
          <FormControl type="email" name="email" id="exampleEmail2" placeholder="Enter email" />
          <FormText>We&apos;ll never share your email with anyone else.</FormText>
        </div>

        <div className="form-group mb-3">
          <FormLabel htmlFor="examplePassword2">Password</FormLabel>
          <FormControl type="password" name="password" id="examplePassword2" placeholder="Password" />
        </div>

        <div className="form-group mb-3">
          <Form.Check type="checkbox" id="formGridCheckbox" label="Check me out !" />
        </div>

        <Button variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </ComponentContainerCard>;
};
const HorizontalForm = () => {
  return <ComponentContainerCard title="Horizontal form" description={<p className="text-muted mb-0">
          Create horizontal forms with the grid by adding the <code>.row</code> class to form groups and using the <code>.col-*-*</code> classes to
          specify the width of your labels and controls. Be sure to add <code>.col-form-label</code> to your <code>&lt;label&gt;</code>s as well so
          they&apos;re vertically centered with their associated form controls.
        </p>}>
      <Form>
        <div className="form-group row mb-3">
          <FormLabel htmlFor="exampleEmail3" column sm={3}>
            Email
          </FormLabel>
          <Col sm={9}>
            <FormControl type="email" name="email" id="exampleEmail3" placeholder="Email" />
          </Col>
        </div>

        <div className="form-group row mb-3">
          <FormLabel htmlFor="examplePassword3" column sm={3}>
            Password
          </FormLabel>
          <Col sm={9}>
            <FormControl type="password" name="password" id="examplePassword3" placeholder="Password" />
          </Col>
        </div>

        <div className="form-group row mb-3">
          <FormLabel htmlFor="examplePassword4" column sm={3}>
            Re-Password
          </FormLabel>
          <Col sm={9}>
            <FormControl type="password" name="password" id="examplePassword4" placeholder="Retype Password" />
          </Col>
        </div>

        <Row className="mb-3 form-group">
          <Col sm={{
          span: 9,
          offset: 3
        }}>
            <Form.Check label="Check me out !" id="checkmeout" />
          </Col>
        </Row>

        <Row className="mb-0 form-group">
          <Col sm={{
          span: 9,
          offset: 3
        }}>
            <Button variant="info" type="button">
              Sign in
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentContainerCard>;
};
const InlineForm = () => {
  return <ComponentContainerCard title="Inline Form" description={<p className="text-muted mb-0">
          Use the <code>.row-cols-lg-auto</code>, <code>.g-3</code> & <code>.align-items-center</code> class to display a series of labels, form
          controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states. Controls only
          appear inline in viewports that are at least 576px wide to account for narrow viewports on mobile devices.
        </p>}>
      <Form className="row row-cols-lg-auto g-3 align-items-center">
        <Col>
          <div className="form-group mb-2 me-sm-2 mb-sm-0">
            <FormControl readOnly type="email" name="email" id="exampleEmail4" bsPrefix="form-control-plaintext" placeholder="email@example.com" />
          </div>
        </Col>

        <Col>
          <div className="form-group mb-2 me-sm-2 mb-sm-0">
            <FormControl type="password" name="password" id="examplePassword5" placeholder="Password" />
          </div>
        </Col>

        <Col>
          <Button color="primary" type="button">
            Confirm identity
          </Button>
        </Col>
      </Form>

      <h6 className="fs-13 mt-3">Auto-sizing</h6>
      <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <FormLabel htmlFor="inlineFormInput" visuallyHidden>
              Name
            </FormLabel>
            <FormControl className="mb-2" id="inlineFormInput" placeholder="Jane Doe" />
          </Col>
          <Col xs="auto">
            <FormLabel htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </FormLabel>
            <div className="input-group mb-2">
              <InputGroupText>@</InputGroupText>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </div>
          </Col>
          <Col xs="auto">
            <FormCheck type="checkbox" id="autoSizingCheck" className="mb-2" label="Remember me" />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentContainerCard>;
};
const HorizontalFormLabelSizing = () => {
  return <ComponentContainerCard title="Horizontal form label sizing" description={<p className="text-muted mb-0">
          Be sure to use <code>.col-form-label-sm</code> or <code>.col-form-label-lg</code> to your <code>&lt;label&gt;</code>s or
          <code>&lt;legend&gt;</code>s to correctly follow the size of <code>.form-control-lg</code> and <code>.form-control-sm</code>.
        </p>}>
      <Form>
        <Row className="mb-2">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            Email
          </label>
          <Col sm={10}>
            <FormControl type="email" id="colFormLabelSm" placeholder="col-form-label-sm" size="sm" />
          </Col>
        </Row>
        <div className="mb-2 row">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Email
          </label>
          <Col sm={10}>
            <FormControl type="email" id="colFormLabel" placeholder="col-form-label" />
          </Col>
        </div>
        <Row>
          <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">
            Email
          </label>
          <Col sm={10}>
            <FormControl type="email" id="colFormLabellg" placeholder="col-form-label-lg" size="lg" />
          </Col>
        </Row>
      </Form>
    </ComponentContainerCard>;
};
const FormRow = () => {
  return <ComponentContainerCard title="" description={<p className="text-muted mb-0">
          By adding <code>.row</code> & <code>.g-2</code>, you can have control over the gutter width in as well the inline as block direction.
        </p>}>
      <Form>
        <Row className="g-2">
          <Col md={6} className="mb-3 form-group">
            <FormLabel>Email</FormLabel>
            <FormControl type="email" placeholder="Email" />
          </Col>
          <Col md={6} className="mb-3 form-group">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </Row>
        <div className="form-group mb-3">
          <FormLabel>Address</FormLabel>
          <FormControl placeholder="1234 Main St" />
        </div>

        <div className="form-group mb-3">
          <FormLabel>Address 2</FormLabel>
          <FormControl placeholder="Apartment, studio, or floor" />
        </div>

        <Row className="g-2">
          <Col md={6} className="mb-3 form-group">
            <FormLabel>City</FormLabel>
            <FormControl />
          </Col>
          <Col md={4} className="mb-3 form-group">
            <FormLabel>State</FormLabel>
            <FormSelect defaultValue="Choose...">
              <option defaultValue="selected">Choose...</option>
              <option>...</option>
            </FormSelect>
          </Col>
          <Col md={2} className="mb-3 form-group">
            <FormLabel>Zip</FormLabel>
            <FormControl />
          </Col>
        </Row>
        <div className="mb-2 form-group" id="formGridCheckbox">
          <FormCheck type="checkbox" label="Check this custom checkbox" id="customcheckbox-1" />
        </div>
        <Button variant="primary" type="button" className="waves-effect waves-light">
          Sign in
        </Button>
      </Form>
    </ComponentContainerCard>;
};
const BasicElements = () => {
  return <>
      <PageTitle title="Form Elements" />
      <Row>
        <Col xs={12}>
          <InputTypes />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FloatingLabels />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <SelectAndSwitches />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Checkboxes />
        </Col>
        <Col lg={6}>
          <Radios />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <InputSizes />
        </Col>
        <Col lg={6}>
          <InputGroups />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <DefaultForm />
        </Col>
        <Col lg={6}>
          <HorizontalForm />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <InlineForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <HorizontalFormLabelSizing />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormRow />
        </Col>
      </Row>
    </>;
};
export default BasicElements;