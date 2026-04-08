import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Modal, ModalBody, ModalHeader, Nav, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import { useKanbanContext } from '@/context/useKanbanContext';
const files = [{
  name: '-admin-design.zip',
  size: '2.3MB',
  preview: {
    text: '.ZIP',
    variant: 'primary'
  }
}, {
  name: 'Dashboard-design.jpg',
  size: 'MB',
  preview: {
    image: avatar2
  }
}, {
  name: 'Admin-bug-report.mp4',
  size: '7.05MB',
  preview: {
    text: '.MP4',
    variant: 'primary'
  }
}];
const KanbanModal = () => {
  const {
    sectionModal
  } = useKanbanContext();
  return <Modal size="lg" show={sectionModal.open} onHide={sectionModal.toggle} className="fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <ModalHeader closeButton>
        <h4 className="modal-title" id="exampleModalLabel">
          IOS App home page
          <span className="badge bg-danger ms-2">Add Tag</span>
        </h4>
      </ModalHeader>
      <ModalBody className="p-4">
        <h5>Description</h5>
        <p className="text-muted mb-4">
          Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas
          quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. With supporting text below as a natural lead-in to additional
          contenposuere erat a ante.
        </p>
        <Row className="justify-content-sm-between">
          <div className="col-auto mb-1">
            <h5>Create Date</h5>
            <p>
              17 March 2023 <span>1:00 AM</span>
            </p>
          </div>
          <div className="col-auto mb-1">
            <h5>Due Date</h5>
            <p>
              22 December 2023 <span>1:00 AM</span>s
            </p>
          </div>
          <div className="col-auto mb-1">
            <h5>Asignee:</h5>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <div className="avatar-xs position-relative d-inline-block">
                  <img src={avatar1} alt="avatar" className="img-fluid  rounded-circle" />
                </div>
                <div className="avatar-xs position-relative d-inline-block" style={{
                left: '-10px'
              }}>
                  <img src={avatar3} alt="avatar" className="img-fluid  rounded-circle" />
                </div>
                <div className="avatar-xs position-relative d-inline-block " style={{
                left: '-20px'
              }}>
                  <img src={avatar4} alt="avatar" className="img-fluid  rounded-circle" />
                </div>
              </div>
            </div>
          </div>
        </Row>
        <TabContainer defaultActiveKey={'1'}>
          <nav>
            <Nav className="nav-pills mb-3" id="pills-tab" role="tablist">
              <NavLink as={'button'} eventKey="1">
                Comments
              </NavLink>
              <NavLink as={'button'} eventKey="2">
                Files
              </NavLink>
            </Nav>
          </nav>
          <TabContent id="pills-tabContent">
            <TabPane eventKey="1" className="fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
              <textarea className="form-control mb-2" placeholder="Write message" id="example-textarea" rows={3} defaultValue={''} />
              <div className="text-end d-none d-lg-block">
                <span className="fs-18 p-2">
                  <IconifyIcon icon="mdi:paperclip" />
                </span>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="d-flex my-2">
                <img src={avatar5} alt="avatar" className="avatar-sm rounded-circle me-3" />
                <div className="">
                  <h5>Jeremy Tomlinson</h5>
                  <p className="text-muted">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis.
                  </p>
                </div>
              </div>
              <div className="d-flex ms-4">
                <img src={avatar4} alt="avatar" className="avatar-sm rounded-circle me-3" />
                <div>
                  <h5>Kathleen Thomas</h5>
                  <p className="text-muted ">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis.
                  </p>
                </div>
              </div>
              <div className="text-center mt-2">
                <Link to="" className="text-danger btn bg-danger-subtle">
                  Load more
                </Link>
              </div>
            </TabPane>
            <TabPane eventKey="2" className="fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
              {files.map((file, idx) => <Card className="bg-transparent border" key={idx}>
                  <CardBody className="p-1">
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <div className={`avatar-sm bg-${file.preview.variant} text-center flex-centered`}>
                          {file.preview.image && <img src={file.preview.image} alt="avatar" className="img-fluid" />}
                          {file.preview.text && <div className="text-white">{file.preview.text}</div>}
                        </div>
                      </Col>
                      <Col>
                        <h5 className="mb-0">{file.name}</h5>
                        <span>{file.size}</span>
                      </Col>
                      <Col xs="auto">
                        <Link to="" className="btn d-block text-center">
                          <IconifyIcon icon="mdi:download-box-outline" className="fs-20 text-center" />
                        </Link>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>)}
            </TabPane>
          </TabContent>
        </TabContainer>
      </ModalBody>
    </Modal>;
};
export default KanbanModal;