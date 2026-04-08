import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
const BreadcrumbExample = () => {
  return <ComponentContainerCard title="Example" description={<p className="text-muted mb-0">
          Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles
          as desired.
          <a target="_blank" href="https://getbootstrap.com/docs/5.3/components/breadcrumb/">
            Bootstrap
          </a>
          documentation for more options.
        </p>}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb  py-0">
          <li className="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb  py-0">
          <li className="breadcrumb-item">
            <Link to="">Home</Link>
          </li>
          <div className="mx-1" style={{
          height: 24
        }}>
            <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
          </div>
          <li className="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb  py-0">
          <li className="breadcrumb-item">
            <Link to="">Home</Link>
          </li>
          <div className="mx-1" style={{
          height: 24
        }}>
            <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
          </div>
          <li className="breadcrumb-item">
            <Link to="">Library</Link>
          </li>
          <div className="mx-1" style={{
          height: 24
        }}>
            <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
          </div>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </ComponentContainerCard>;
};
const BreadcrumbWithIcon = () => {
  return <ComponentContainerCard title="With Icons" description={<p className="text-muted mb-0">Optionally you can also specify the icon with your breadcrumb item.</p>}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-1 p-2 bg-light-subtle">
          <li className="breadcrumb-item active" aria-current="page">
            <IconifyIcon icon="mdi:home-outline" className="me-1" />
            Home
          </li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-1 p-2 bg-light-subtle">
          <li className="breadcrumb-item">
            <Link to="">
              <IconifyIcon icon="mdi:home-outline" className="me-1" />
              Home
            </Link>
          </li>
          <div className="mx-2" style={{
          height: 24
        }}>
            {'>'}
          </div>
          <li className="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-2 bg-light-subtle">
          <li className="breadcrumb-item">
            <Link to="">
              <IconifyIcon icon="mdi:home-outline" className="me-1" />
              Home
            </Link>
          </li>
          <div className="mx-2" style={{
          height: 24
        }}>
            {'>'}
          </div>
          <li className="breadcrumb-item">
            <Link to="">Library</Link>
          </li>
          <div className="mx-2" style={{
          height: 24
        }}>
            {'>'}
          </div>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </ComponentContainerCard>;
};
const Breadcrumb = () => {
  return <>
      <PageTitle title="Breadcrumb" />
      <Row>
        <Col lg={6}>
          <BreadcrumbExample />
        </Col>
        <Col lg={6}>
          <BreadcrumbWithIcon />
        </Col>
      </Row>
    </>;
};
export default Breadcrumb;