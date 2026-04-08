import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Col, Row } from 'react-bootstrap';
const EmbedVideo = () => {
  return <>
      <PageTitle title="Embed Video" />
      <Row>
        <Col xl={6}>
          <ComponentContainerCard title="Responsive embed video 21:9" description={<p className="text-muted mb-0">
                Use class <code>.ratio-21x9</code>
              </p>}>
            <div className="ratio ratio-21x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
            </div>
          </ComponentContainerCard>

          <ComponentContainerCard title="Responsive embed video 1:1" description={<p className="text-muted mb-0">
                Use class <code>.ratio-1x1</code>
              </p>}>
            <div className="ratio ratio-1x1">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
            </div>
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title="Responsive embed video 16:9" description={<p className="text-muted mb-0">
                Use class <code>.ratio-16x9</code>
              </p>}>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
            </div>
          </ComponentContainerCard>
          <ComponentContainerCard title="Responsive embed video 4:3" description={<p className="text-muted mb-0">
                Use class <code>.ratio-4x3</code>
              </p>}>
            <div className="ratio ratio-4x3">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
            </div>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default EmbedVideo;