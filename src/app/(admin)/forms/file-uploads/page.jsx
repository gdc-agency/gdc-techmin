import ComponentContainerCard from '@/components/ComponentContainerCard';
import { FileUploader } from '@/components/FileUploader';
import PageTitle from '@/components/PageTitle';
import { Col, Row } from 'react-bootstrap';
const FileUploads = () => {
  return <>
      <PageTitle title="File Uploads" />
      <Row>
        <Col xs={12}>
          <ComponentContainerCard title="Dropzone File Upload" description={<p className="text-muted mb-0">DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>}>
            <FileUploader icon="ri:upload-cloud-2-line" text="Drop files here or click to upload." extraText="(This is just a demo dropzone. Selected files are not actually uploaded.)" />
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default FileUploads;