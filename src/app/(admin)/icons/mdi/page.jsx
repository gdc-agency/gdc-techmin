import { mdiIcons } from '@/assets/data/icons';
import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const MaterialIcons = () => {
  return <>
      <PageTitle title="Material Design Icons" />
      <Card>
        <CardHeader>
          <CardTitle>All Icons</CardTitle>
          <p className="text-muted mb-0">
            Use <code>&lt;iconifyIcon icon=&quot;mdi:menu&quot;&gt;&lt;/iconifyIcon&gt;</code>
          </p>
        </CardHeader>
        <CardBody>
          <Row className="icons-list-demo" id="icons">
            {mdiIcons.map((icon, idx) => <Col xl={3} lg={4} sm={6} key={idx}>
                <IconifyIcon icon={`mdi:${icon}`} />
                <span className="ms-3">{icon}</span>
              </Col>)}
          </Row>
        </CardBody>
      </Card>
    </>;
};
export default MaterialIcons;