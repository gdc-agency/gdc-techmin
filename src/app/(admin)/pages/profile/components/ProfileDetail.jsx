import { projectData } from '@/assets/data/other';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getActivityData } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import { timeSince } from '@/utils/date';
import { getProjectStatusVariant } from '@/utils/other';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { Button, Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const About = () => {
  return <div className="profile-desk">
      <h5 className="text-uppercase fs-17 text-dark">Johnathan Deo</h5>
      <div className="designation mb-3">PRODUCT DESIGNER (UX / UI / Visual Interaction)</div>
      <p className="text-muted fs-16">
        I have 10 years of experience designing for the web, and specialize in the areas of user interface design, interaction design, visual design
        and prototyping. I’ve worked with notable startups including Pearl Street Software.
      </p>
      <h5 className="mt-4 fs-17 text-dark">Contact Information</h5>
      <table className="table table-condensed table-bordered mb-0 border-top table-striped">
        <tbody>
          <tr>
            <th scope="row">Url</th>
            <td>
              <Link to="" className="ng-binding">
                www.example.com
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>
              <Link to="" className="ng-binding">
                jonathandeo@example.com
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">Phone</th>
            <td className="ng-binding">(123)-456-7890</td>
          </tr>
          <tr>
            <th scope="row">Skype</th>
            <td>
              <Link to="" className="ng-binding">
                jonathandeo123
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>;
};
const Activities = () => {
  const activityData = useFetchData(getActivityData);
  return <div className="timeline-2">
      {activityData?.map((activity, idx) => <div className="time-item" key={idx}>
          <div className="item-info ms-3 mb-3">
            <div className="text-muted">{timeSince(activity.time)}</div>
            <p>
              <Link to="" className="text-info">
                {activity.name}
              </Link>
              {activity.title}
            </p>
            {activity.images && activity.images.map((image, idx) => <img src={image} alt="" height={40} width={60} className="rounded-1 me-1" key={idx} />)}
            {activity.description && <p>
                <em>{activity.description}</em>
              </p>}
          </div>
        </div>)}
    </div>;
};
const Settings = () => {
  const settingSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
    website: yup.string().required('Please enter your website url'),
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password'),
    rePassword: yup.string().required('Please confirm your password').oneOf([yup.ref('password')], 'Passwords must match'),
    about: yup.string().required('Please enter your intro')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(settingSchema),
    defaultValues: {
      name: 'John Doe',
      email: 'first.last@example.com',
      website: 'Enter website url',
      username: 'john',
      about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    }
  });
  return <div className="user-profile-content">
      <form onSubmit={handleSubmit(() => {})}>
        <Row className="row-cols-sm-2 row-cols-1">
          <TextFormInput name="name" label="Full Name" control={control} containerClassName="mb-2" />

          <TextFormInput name="email" type="email" label="Email" control={control} containerClassName="mb-3" />

          <TextFormInput name="website" label="Website" control={control} containerClassName="mb-3" />

          <TextFormInput name="username" label="Username" control={control} containerClassName="mb-3" />

          <PasswordFormInput name="password" label="Password" control={control} containerClassName="mb-3" placeholder="6 - 15 Characters" />

          <PasswordFormInput name="rePassword" label="Re-Password" control={control} containerClassName="mb-3" placeholder="6 - 15 Characters" />

          <TextAreaFormInput name="about" label="About Me" rows={5} control={control} containerClassName="col-sm-12 mb-3" />
        </Row>
        <Button variant="primary" type="submit">
          <IconifyIcon icon="mdi:content-save-outline" className="me-1 fs-16 lh-1" /> Save
        </Button>
      </form>
    </div>;
};
const Projects = () => {
  return <Row className="m-t-10">
      <Col md={12}>
        <div className="table-responsive">
          <table className="table table-bordered mb-0 table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Assign</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {projectData.map((project, idx) => <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{project.name}</td>
                  <td>{new Date(project.startDate).toLocaleDateString()}</td>
                  <td>{new Date(project.dueDate).toLocaleDateString()}</td>
                  <td>
                    <span className={`badge bg-${getProjectStatusVariant(project.status)}`}>{project.status}</span>
                  </td>
                  <td>Techzaa</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>;
};
const ProfileDetail = () => {
  return <div className="profile-content">
      <TabContainer defaultActiveKey={'about'}>
        <Nav as={'ul'} justify className="nav-pills gap-0 p-3 text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <NavItem as="li" className="mt-2">
            <NavLink eventKey="about" className="fs-5 p-2 ">
              About
            </NavLink>
          </NavItem>
          <NavItem as="li" className="mt-2">
            <NavLink eventKey="activity" className="fs-5 p-2">
              Activities
            </NavLink>
          </NavItem>
          <NavItem as="li" className="mt-2">
            <NavLink eventKey="setting" className="fs-5 p-2">
              Settings
            </NavLink>
          </NavItem>
          <NavItem as="li" className="mt-2">
            <NavLink eventKey="project" className="fs-5 p-2">
              Projects
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="m-0 p-2 p-sm-4 " id="v-pills-tabContent">
          <TabPane eventKey="about" id="aboutme" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
            <About />
          </TabPane>
          <TabPane eventKey="activity">
            <Activities />
          </TabPane>
          <TabPane eventKey="setting">
            <Settings />
          </TabPane>
          <TabPane eventKey="project">
            <Projects />
          </TabPane>
        </TabContent>
      </TabContainer>
    </div>;
};
export default ProfileDetail;