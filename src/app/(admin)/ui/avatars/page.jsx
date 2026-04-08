import { Col, Row } from 'react-bootstrap';
import PageTitle from '@/components/PageTitle';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import small2 from '@/assets/images/small/small-2.jpg';
import small3 from '@/assets/images/small/small-3.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import AvatarGroup from './components/AvatarGroup';
const ImageSizes = () => {
  return <ComponentContainerCard title="Sizing - Images" description={<p className="text-muted mb-0">
          Create and group avatars of different sizes and shapes with the css classes. Using Bootstrap&apos;s naming convention, you can control size
          of avatar including standard avatar, or scale it up to different sizes.
        </p>}>
      <Row>
        <Col md={3}>
          <img src={avatar2} alt="image" className="img-fluid avatar-xs rounded" />
          <p>
            <code>.avatar-xs</code>
          </p>
          <img src={avatar3} alt="image" className="img-fluid avatar-sm rounded mt-2" />
          <p className="mb-2 mb-sm-0">
            <code>.avatar-sm</code>
          </p>
        </Col>
        <Col md={3}>
          <img src={avatar4} alt="image" className="img-fluid avatar-md rounded" />
          <p>
            <code>.avatar-md</code>
          </p>
        </Col>
        <Col md={3}>
          <img src={avatar5} alt="image" className="img-fluid avatar-lg rounded" />
          <p>
            <code>.avatar-lg</code>
          </p>
        </Col>
        <Col md={3}>
          <img src={avatar6} alt="image" className="img-fluid avatar-xl rounded" />
          <p className="mb-0">
            <code>.avatar-xl</code>
          </p>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const RoundedCircleImages = () => {
  return <ComponentContainerCard title="Rounded Circle" description={<p className="text-muted mb-0">
          Using an additional class <code>.rounded-circle</code> in
          <code>&lt;img&gt;</code> element creates the rounded avatar.
        </p>}>
      <Row>
        <Col md={4}>
          <img src={avatar7} alt="image" className="img-fluid avatar-md rounded-circle" />
          <p className="mt-1">
            <code>.avatar-md .rounded-circle</code>
          </p>
        </Col>
        <Col md={4}>
          <img src={avatar8} alt="image" className="img-fluid avatar-lg rounded-circle" />
          <p>
            <code>.avatar-lg .rounded-circle</code>
          </p>
        </Col>
        <Col md={4}>
          <img src={avatar9} alt="image" className="img-fluid avatar-xl rounded-circle" />
          <p className="mb-0">
            <code>.avatar-xl .rounded-circle</code>
          </p>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ImageSizeWithBackground = () => {
  return <ComponentContainerCard title="Sizing - Background Color" description={<p className="text-muted mb-0">
          Using utilities classes of background e.g. <code>bg-*</code> allows you to have any background color as well.
        </p>}>
      <Row>
        <Col md={3}>
          <div className="avatar-xs">
            <span className="avatar-title rounded">xs</span>
          </div>
          <p className="mb-2 fs-14 mt-1">
            Using <code>.avatar-xs</code>
          </p>
          <div className="avatar-sm mt-3">
            <span className="avatar-title bg-success rounded">sm</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-sm</code>
          </p>
        </Col>
        <Col md={3}>
          <div className="avatar-md">
            <span className="avatar-title bg-info-subtle text-info fs-20 rounded">MD</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-md</code>
          </p>
        </Col>
        <Col md={3}>
          <div className="avatar-lg">
            <span className="avatar-title bg-danger fs-22 rounded">LG</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-lg</code>
          </p>
        </Col>
        <Col md={3}>
          <div className="avatar-xl">
            <span className="avatar-title bg-warning-subtle text-warning fs-24 rounded">XL</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-xl</code>
          </p>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const RoundedWithBackground = () => {
  return <ComponentContainerCard title="Rounded Circle Background" description={<p className="text-muted mb-0">
          Using an additional class <code>.rounded-circle</code> in
          <code>&lt;img&gt;</code> element creates the rounded avatar.
        </p>}>
      <Row>
        <Col md={4}>
          <div className="avatar-md">
            <span className="avatar-title bg-secondary-subtle text-secondary fs-20 rounded-circle">MD</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-md .rounded-circle</code>
          </p>
        </Col>
        <Col md={4}>
          <div className="avatar-lg">
            <span className="avatar-title bg-light text-dark fs-22 rounded-circle">LG</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-lg .rounded-circle</code>
          </p>
        </Col>
        <Col md={4}>
          <div className="avatar-xl">
            <span className="avatar-title bg-primary-subtle text-primary fs-24 rounded-circle">XL</span>
          </div>
          <p className="mb-0 fs-14 mt-1">
            Using <code>.avatar-xl .rounded-circle</code>
          </p>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ImageShapes = () => {
  return <ComponentContainerCard title="Images Shapes" description={<p className="text-muted mb-0">Avatars with different sizes and shapes.</p>}>
      <Row>
        <Col sm={2}>
          <img src={small2} alt="image" className="img-fluid rounded" width={200} />
          <p className="mb-0">
            <code>.rounded</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={avatar6} alt="image" className="img-fluid rounded" width={120} />
          <p className="mb-0">
            <code>.rounded</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={avatar7} alt="image" className="img-fluid rounded-circle" width={120} />
          <p className="mb-0">
            <code>.rounded-circle</code>
          </p>
        </Col>
        <Col sm={2}>
          <img src={small3} alt="image" className="img-fluid img-thumbnail" width={200} />
          <p className="mb-0">
            <code>.img-thumbnail</code>
          </p>
        </Col>
        <Col sm={2}>
          <img src={avatar8} alt="image" className="img-fluid rounded-circle img-thumbnail" width={120} />
          <p className="mb-0">
            <code>.rounded-circle .img-thumbnail</code>
          </p>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const AvatarGroups = () => {
  return <ComponentContainerCard title="Avatar Group" description={<p className="text-muted mb-0">
          Use <code>avatar-group</code> class to show avatar images with the group. Use <code>avatar-group</code> class with
          <code>data-bs-toggle=&quot;tooltip&quot;</code> to show avatar group images with tooltip.
        </p>}>
      <Row>
        <Col lg={6}>
          <div className="mt-lg-0 mt-3">
            <div className="avatar-group">
              <div className="avatar-group-item">
                <img src={avatar4} alt="avatar" className="rounded-circle avatar-xs" />
              </div>
              <div className="avatar-group-item">
                <img src={avatar5} alt="avatar" className="rounded-circle avatar-xs" />
              </div>
              <div className="avatar-group-item">
                <div className="avatar-xs">
                  <div className="avatar-title rounded-circle text-bg-info">A</div>
                </div>
              </div>
              <div className="avatar-group-item">
                <img src={avatar2} alt="avatar" className="rounded-circle avatar-xs" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mt-lg-0 mt-3">
            <AvatarGroup />
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const Avatars = () => {
  return <>
      <PageTitle title="avatars" />
      <Row>
        <Col xl={6}>
          <ImageSizes />
        </Col>
        <Col xl={6}>
          <RoundedCircleImages />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ImageSizeWithBackground />
        </Col>
        <Col xl={6}>
          <RoundedWithBackground />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ImageShapes />
        </Col>
        <Col lg={6}>
          <AvatarGroups />
        </Col>
      </Row>
    </>;
};
export default Avatars;