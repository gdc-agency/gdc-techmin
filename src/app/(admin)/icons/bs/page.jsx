import { bootstrapIcons } from '@/assets/data/icons';
import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const BootstrapIcons = () => {
  return <>
      <PageTitle title="Bootstrap Icons" />
      <Card>
        <CardHeader>
          <CardTitle>All Icons</CardTitle>
          <p className="text-muted mb-0">
            Use <code>&lt;iconifyIcon icon=&quot;bi:menu&quot;&gt;&lt;/iconifyIcon&gt;</code>
          </p>
        </CardHeader>
        <CardBody>
          <Row className="icons-list-demo" id="icons">
            {bootstrapIcons.map((icon, idx) => <Col xl={3} lg={4} sm={6} key={idx}>
                <IconifyIcon icon={`bi:${icon}`} />
                <span className="ms-3">{icon}</span>
              </Col>)}
          </Row>
        </CardBody>
      </Card>
    </>;
};
export default BootstrapIcons;