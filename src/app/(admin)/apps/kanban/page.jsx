import { Col, Row } from 'react-bootstrap';
import Board from './Components/Board';
import { KanbanProvider } from '@/context/useKanbanContext';
import KanbanModal from './Components/Modal';
import PageTitle from '@/components/PageTitle';
const KanbanBoard = () => {
  return <>
      <PageTitle title="Kanban" />
      <Row>
        <Col xs={12}>
          <KanbanProvider>
            <Board />
            <KanbanModal />
          </KanbanProvider>
        </Col>
      </Row>
    </>;
};
export default KanbanBoard;