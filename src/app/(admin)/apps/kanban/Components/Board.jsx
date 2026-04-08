import { useKanbanContext } from '@/context/useKanbanContext';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { Card } from 'react-bootstrap';
import TaskItem from './TaskItem';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const Board = () => {
  const {
    onDragEnd,
    sections,
    getAllTasksPerSection
  } = useKanbanContext();
  return <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {sections.map(section => <Droppable key={section.id} droppableId={section.id}>
            {provided => <div ref={provided.innerRef} {...provided.droppableProps} className="tasks pt-2 border-0" data-plugin="dragula" data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="mb-0">
                    In {section.title} ({getAllTasksPerSection(section.id).length})
                  </h4>
                  <span className="badge border text-dark">
                    <IconifyIcon icon="mdi:plus" className="fs-18" />
                  </span>
                </div>
                <div id="task-list-one" className="task-list-items">
                  {getAllTasksPerSection(section.id).map((task, idx) => <Draggable draggableId={task.id} index={idx} key={task.id}>
                      {provided => <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskItem task={task} />
                        </Card>}
                    </Draggable>)}
                  {provided.placeholder}
                </div>
              </div>}
          </Droppable>)}
      </div>
    </DragDropContext>;
};
export default Board;