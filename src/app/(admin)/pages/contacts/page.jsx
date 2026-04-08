import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllContacts } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import { toAlphaNumber } from '@/utils/change-casing';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const ContactCard = ({
  contact
}) => {
  const {
    image,
    position,
    social,
    user
  } = contact;
  return <Card>
      <div className="position-relative img-overlay">
        <img src={image} alt="small" height={150} className="object-fit-cover w-100" />
      </div>
      <CardBody>
        <div className="text-center">
          <div className="mx-auto position-absolute z-3 start-50  translate-middle border border-5 border-white" style={{
          top: '40%'
        }}>
            {user?.avatar && <img src={user.avatar} alt="small" className="avatar-md img-fluid " />}
          </div>
          <div className="pt-4">
            <h4 className="mb-1">{user?.name}</h4>
            <p className="mb-2">{position}</p>
          </div>
          <div className="d-flex gap-2 justify-content-center mb-2">
            <span role="button" className="fs-22 text-primary">
              <IconifyIcon icon="mdi:facebook" />
            </span>
            <span role="button" className="fs-22 text-pink">
              <IconifyIcon icon="mdi:microsoft-xbox" />
            </span>
            <span role="button" className="fs-22 text-danger">
              <IconifyIcon icon="mdi:linkedin" />
            </span>
            <span role="button" className="fs-22 text-info">
              <IconifyIcon icon="mdi:twitter" />
            </span>
          </div>
          <ul className="d-flex justify-content-around list-unstyled border-top border-dark-subtle pt-2 text-center mb-0">
            <li>
              <p className="text-muted fw-semibold mb-1">Follower</p>
              <h4>{toAlphaNumber(social.follower)}</h4>
            </li>
            <li>
              <p className="text-muted fw-semibold mb-1">Following</p>
              <h4>{toAlphaNumber(social.following)}</h4>
            </li>
            <li>
              <p className="text-muted fw-semibold mb-1">Total Post</p>
              <h4>{toAlphaNumber(social.post)}</h4>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>;
};
const Contacts = () => {
  const allContacts = useFetchData(getAllContacts);
  return <>
      <PageTitle title="Contact List" />
      <Row>
        {allContacts && allContacts.map((contact, idx) => <Col xl={4} lg={4} md={6} key={idx}>
            <ContactCard contact={contact} />
          </Col>)}
      </Row>
      <Row>
        <Col sm={12}>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <span role="button" aria-label="Previous" className="page-link">

                  <IconifyIcon icon="mdi:chevron-left" className="lh-sm" />
                </span>
              </li>
              <li className="page-item">
                <span role="button" className="page-link">
                  1
                </span>
              </li>
              <li className="active page-item">
                <span role="button" className="page-link">
                  2
                </span>
              </li>
              <li className="page-item">
                <span role="button" className="page-link">
                  3
                </span>
              </li>
              <li className="disabled page-item">
                <span role="button" className="page-link">
                  4
                </span>
              </li>
              <li className="page-item">
                <span role="button" className="page-link">
                  5
                </span>
              </li>
              <li className="page-item">
                <span role="button" aria-label="Next" className="page-link">

                  <IconifyIcon icon="mdi:chevron-right" className="lh-sm" />
                </span>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </>;
};
export default Contacts;