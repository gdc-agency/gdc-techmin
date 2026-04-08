import { Col, Row } from 'react-bootstrap';
import EditableForm from './components/EditableForm';
import PageTitle from '@/components/PageTitle';
const Editable = () => {
  return <>
      <PageTitle title="X-Editable" />
      <Row>
        <Col xs={12}>
          <EditableForm />
        </Col>
      </Row>
    </>;
};
export default Editable;