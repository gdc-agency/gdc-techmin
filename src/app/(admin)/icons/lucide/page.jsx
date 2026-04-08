import { lucideIcons } from '@/assets/data/icons';
import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const LucideIcons = () => {
  return <>
      <PageTitle title="Lucide Icons" />
      <Card>
        <CardHeader>
          <CardTitle>All Icons</CardTitle>
          <p className="text-muted mb-0">
            Use <code>&lt;iconifyIcon icon=&quot;lucide:menu&quot;&gt;&lt;/iconifyIcon&gt;</code>
          </p>
        </CardHeader>
        <CardBody>
          <Row className="icons-list-demo" id="icons">
            {lucideIcons.map((icon, idx) => <Col xl={3} lg={4} sm={6} key={idx}>
                <IconifyIcon icon={`lucide:${icon}`} />
                <span className="ms-3">{icon}</span>
              </Col>)}
          </Row>
        </CardBody>
      </Card>
    </>;
};
export default LucideIcons;