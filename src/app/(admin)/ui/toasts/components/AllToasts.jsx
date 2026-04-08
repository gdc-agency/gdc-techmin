import { Button, Card, CardBody, CardHeader, Col, Form, FormSelect, Row, Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import smLogo from '@/assets/images/logo-sm.png';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
const DefaultToasts = () => {
  const {
    isTrue: isOpen,
    toggle: hide
  } = useToggle(true);
  const {
    isTrue: isOpenTranslucent,
    toggle: hideTranslucent
  } = useToggle(true);
  const {
    isTrue: isOpenPlacement,
    toggle: hidePlacement
  } = useToggle(true);
  const [stacked, setStacked] = useState([{
    time: 'just now',
    desc: 'See? Just like this.'
  }, {
    time: '2 seconds ago',
    desc: 'Heads up, toasts will stack automatically'
  }]);

  /*
   * handle close
   */
  const handleClose = index => {
    const list = [...stacked];
    list.splice(index, 1);
    setStacked(list);
  };
  return <Card>
      <CardHeader>
        <h4 className="card-title">Bootstrap Toasts</h4>
        <p className="text-muted mb-0">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6}>
            <h5 className="mb-2">Basic</h5>
            <p className="text-muted mb-0">
              Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your
              “toasted” content and strongly encourage a dismiss button.
            </p>
            <div className="p-3">
              <Toast onClose={hide} show={isOpen} autohide>
                <ToastHeader>
                  <img src={smLogo} alt="brand-logo" height="16" className="me-1" />
                  <strong className="me-auto">TECHMIN</strong>
                  <small>11 mins ago</small>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
          </Col>

          <Col md={6}>
            <h5 className="mb-2">Translucent</h5>
            <p className="text-muted mb-0">
              Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter
              CSS property, we&apos;ll also attempt to blur the elements under a toast.
            </p>

            <div className="p-3 bg-light">
              <Toast onClose={hideTranslucent} show={isOpenTranslucent} delay={8000} autohide className="fade">
                <ToastHeader>
                  <img src={smLogo} alt="brand-logo" height="16" className="me-1" />
                  <strong className="me-auto">TECHMIN</strong>
                  <small>11 mins ago</small>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mt-4">
            <h5 className="mb-2">Stacking</h5>
            <p className="text-muted mb-0 ">When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>
            <div className="p-3">
              <div aria-live="polite" aria-atomic="true" style={{
              position: 'relative',
              minHeight: 200
            }}>
                <div className="toast-container" style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}>
                  {stacked.map((item, idx) => {
                  return <Toast className="fade" key={idx} onClose={() => handleClose(idx)} delay={5000} autohide>
                        <ToastHeader>
                          <img src={smLogo} alt="brand-logo" height="16" className="me-1" />
                          <strong className="me-auto">TECHMIN</strong>
                          <small className="text-muted">{item.time}</small>
                        </ToastHeader>
                        <ToastBody>{item.desc}</ToastBody>
                      </Toast>;
                })}
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="mt-4">
            <h5 className="mb-2">Placement</h5>
            <p className="text-muted mb-0">
              Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever
              going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.
            </p>
            <div className="p-3">
              <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{
              minHeight: 200
            }}>
                <Toast className="fade" onClose={hidePlacement} show={isOpenPlacement} delay={6000} autohide>
                  <ToastHeader>
                    <img src={smLogo} alt="brand-logo" height="16" className="me-1" />
                    <strong className="me-auto">TECHMIN</strong>
                    <small>11 mins ago</small>
                  </ToastHeader>
                  <ToastBody>Hello, world! This is a toast message.</ToastBody>
                </Toast>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
const CustomToast = () => {
  const {
    isTrue: isOpenCustom1,
    toggle: hideCustom1
  } = useToggle(true);
  const {
    isTrue: isOpenCustom2,
    toggle: hideCustom2
  } = useToggle(true);
  const {
    isTrue: isOpenCustom3,
    toggle: hideCustom3
  } = useToggle(true);
  const {
    isTrue: isOpenCustom4,
    toggle: hideCustom4
  } = useToggle(true);
  return <Card>
      <CardHeader>
        <h4 className="card-title">Custom content</h4>
        <p className="text-muted mb-0">Alternatively, you can also add additional controls and components to toasts.</p>
      </CardHeader>
      <CardBody>
        <Toast className="align-items-center mb-4" show={isOpenCustom1} onClose={hideCustom1} delay={3000} autohide>
          <div className="d-flex">
            <ToastBody>Hello, world! This is a toast message.</ToastBody>
            <Button variant="" onClick={hideCustom1} className="btn-close me-2 m-auto" />
          </div>
        </Toast>

        <Toast className="align-items-center text-white bg-primary border-0 mb-4" show={isOpenCustom2} onClose={hideCustom2} delay={6000} autohide>
          <div className="d-flex">
            <ToastBody>Hello, world! This is a toast message.</ToastBody>
            <Button variant="" onClick={hideCustom2} className="btn-close btn-close-white me-2 m-auto" />
          </div>
        </Toast>

        <Toast className="mb-4" show={isOpenCustom3} onClose={hideCustom3} delay={8000} autohide>
          <ToastBody>
            Hello, world! This is a toast message.
            <div className="mt-2 pt-2 border-top d-flex flex-wrap gap-1">
              <Button variant="primary" className="btn-sm">
                Take action
              </Button>
              <Button variant="secondary" className="btn-sm" onClick={hideCustom3}>
                Close
              </Button>
            </div>
          </ToastBody>
        </Toast>

        <Toast className="bg-primary" show={isOpenCustom4} onClose={hideCustom4} delay={10000} autohide>
          <ToastBody className="text-white">
            Hello, world! This is a toast message.
            <div className="mt-2 pt-2 border-top d-flex flex-wrap gap-1">
              <Button variant="light" className="btn-sm">
                Take action
              </Button>
              <Button variant="secondary" className="btn-sm" onClick={hideCustom4}>
                Close
              </Button>
            </div>
          </ToastBody>
        </Toast>
      </CardBody>
    </Card>;
};
const PlacementToast = () => {
  const [position, setPosition] = useState('top-start');
  const positions = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'];
  return <Card>
      <CardHeader>
        <h4 className="card-title">Placement</h4>
        <p className="text-muted mb-0">
          Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever
          going to show one toast at a time, put the positioning styles right on the
          <code>.toast</code>.
        </p>
      </CardHeader>
      <CardBody>
        <Form>
          <div className="mb-3">
            <label htmlFor="selectToastPlacement">Toast placement</label>
            <FormSelect className="mt-2" onChange={e => setPosition(e.currentTarget.value)} id="selectToastPlacement">
              {(positions || []).map((position, idx) => <option key={idx} value={position}>
                  {position}
                </option>)}
            </FormSelect>
          </div>
        </Form>
        <div aria-live="polite" aria-atomic="true" className="bg-light position-relative bd-example-toasts" style={{
        minHeight: 294
      }}>
          <ToastContainer className="position-absolute p-3" position={position} id="toastPlacement">
            <Toast>
              <ToastHeader closeButton={false}>
                <img src={smLogo} alt="brand-logo" height="16" className="me-1" />
                <strong className="me-auto">TECHMIN</strong>
                <small>11 mins ago</small>
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
          </ToastContainer>
        </div>
      </CardBody>
    </Card>;
};
const AllToasts = () => {
  return <>
      <Row>
        <Col xs={12}>
          <DefaultToasts />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CustomToast />
        </Col>
        <Col lg={6}>
          <PlacementToast />
        </Col>
      </Row>
    </>;
};
export default AllToasts;