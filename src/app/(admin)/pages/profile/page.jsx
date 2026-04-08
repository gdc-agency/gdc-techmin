import { Button, Col, Row } from 'react-bootstrap';
import profileBg from '@/assets/images/bg-profile.jpg';
import PageTitle from '@/components/PageTitle';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ProfileDetail from './components/ProfileDetail';
const Profile = () => {
  return <>
      <PageTitle title="Profile" />
      <Row>
        <Col sm={12}>
          <div className="profile-bg-picture" style={{
          backgroundImage: `url(${profileBg})`,
          backgroundPosition: 'bottom'
        }} />
          <div className="p-sm-3 p-0 profile-user">
            <Row className="g-2">
              <Col lg={3} className="d-none d-lg-block">
                <div className="profile-user-img p-2 text-start">
                  <img src={avatar1} alt="avatar" className="img-thumbnail avatar-lg rounded" />
                </div>
                <div className="text-start p-1 pt-2">
                  <h4 className=" fs-17 ellipsis">Adams A. Franklin</h4>
                  <p className="font-13"> User Experience Specialist</p>
                  <p className="text-muted mb-0">
                    <small>California, United States</small>
                  </p>
                  <div className="d-flex pt-3 align-items-center justify-content-center flex-xl-nowrap flex-lg-wrap justify-content-md-start">
                    <Button variant="soft-danger" type="button" className="me-sm-2 mt-1 icons-center">
                      <IconifyIcon icon="mdi:cog" className="align-text-bottom me-1 fs-16 lh-1" />
                      Edit Profile
                    </Button>
                    <Button variant="soft-info" className="mt-1">
                      
                      <IconifyIcon icon="mdi:check-all" className="fs-18 me-1 lh-1" />
                      Following
                    </Button>
                  </div>
                </div>
                <div className="pt-3 ps-2">
                  <p className="text-muted mb-2 font-13">
                    <strong>Full Name :</strong> <span className="ms-2">Adams A. Franklin</span>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <strong>Mobile :</strong>
                    <span className="ms-2">(123) 123 1234</span>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <strong>Email :</strong> <span className="ms-2">user@email.domain</span>
                  </p>
                  <p className="text-muted mb-1 font-13">
                    <strong>Location :</strong> <span className="ms-2">USA</span>
                  </p>
                </div>
                <div className="text-start mt-4">
                  <h4>Fllow On:</h4>
                  <div className="d-flex gap-2 mt-3">
                    <Button className="btn px-2 py-1 btn-soft-primary">
                      <IconifyIcon icon="mdi:facebook" />
                    </Button>
                    <Button className="btn px-2 py-1 btn-soft-danger">
                      <IconifyIcon icon="mdi:google-plus" />
                    </Button>
                    <Button className="btn px-2 py-1 btn-soft-info">
                      <IconifyIcon icon="mdi:twitter" />
                    </Button>
                    <Button className="btn px-2 py-1 btn-soft-dark">
                      <IconifyIcon icon="mdi:github" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={9} className="bg-light-subtle">
                <ProfileDetail />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>;
};
export default Profile;