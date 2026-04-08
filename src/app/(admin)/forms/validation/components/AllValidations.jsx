import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useState } from 'react';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
const CustomStyles = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return <ComponentContainerCard title="Custom styles" description={<p className="text-muted mb-0">
          Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for
          <code>&lt;select&gt;</code>s are only available with
          <code>.form-select</code>, and not <code>.form-control</code>.
        </p>}>
      <Form className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormLabel>First name</FormLabel>
          <FormControl type="text" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
          <Feedback>Looks good!</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Last name</FormLabel>
          <FormControl type="text" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
          <Feedback>Looks good!</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <InputGroupText id="inputGroupPrepend">@</InputGroupText>
            <FormControl type="text" id="validationCustomUsername" placeholder="Username" required />
            <Feedback type="invalid">Please choose a username.</Feedback>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>City</FormLabel>
          <FormControl type="text" id="validationCustom03" placeholder="City" required />
          <Feedback type="invalid">Please provide a valid city.</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>State</FormLabel>
          <FormControl type="text" id="validationCustom04" placeholder="State" required />
          <Feedback type="invalid">Please provide a valid state.</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Zip</FormLabel>
          <FormControl type="text" id="validationCustom05" placeholder="Zip" required />
          <Feedback type="invalid">Please provide a valid zip.</Feedback>
        </FormGroup>
        <FormGroup className="col-12">
          <FormCheck id="invalidCheck" required className="mb-3" label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
        </FormGroup>
        <Col xs={12}>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Col>
      </Form>
    </ComponentContainerCard>;
};
const Tooltips = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return <ComponentContainerCard title="Tooltips" description={<p className="text-muted mb-0">
          If your form layout allows it, you can swap the
          <code>
            .{'{'}valid|invalid{'}'}-feedback
          </code>
          classes for
          <code>
            .{'{'}valid|invalid{'}'}-tooltip
          </code>
          classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code>
          on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative
          setup.
        </p>}>
      <Form className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
        <FormGroup className="position-relative mb-3">
          <FormLabel>First name</FormLabel>
          <FormControl type="text" placeholder="First name" defaultValue="Mark" required />
          <Feedback tooltip>Looks good!</Feedback>
          <Feedback type="invalid" tooltip>
            Please enter first name.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Last name</FormLabel>
          <FormControl type="text" placeholder="Last name" defaultValue="Otto" required />
          <Feedback tooltip>Looks good!</Feedback>
          <Feedback type="invalid" tooltip>
            Please enter last name.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <FormControl type="text" placeholder="Username" required />
            <Feedback type="invalid" tooltip>
              Please choose a unique and valid username.
            </Feedback>
          </InputGroup>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>City</FormLabel>
          <FormControl type="text" placeholder="City" required />
          <Feedback type="invalid" tooltip>
            Please provide a valid city.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>State</FormLabel>
          <FormControl type="text" placeholder="State" required />
          <Feedback type="invalid" tooltip>
            Please provide a valid state.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Zip</FormLabel>
          <FormControl type="text" placeholder="Zip" required />
          <Feedback type="invalid" tooltip>
            Please provide a valid zip.
          </Feedback>
        </FormGroup>
        <Col xs={12}>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Col>
      </Form>
    </ComponentContainerCard>;
};
const AllValidations = () => {
  return <Row>
      <Col lg={6}>
        <CustomStyles />
      </Col>
      <Col lg={6}>
        <Tooltips />
      </Col>
    </Row>;
};
export default AllValidations;