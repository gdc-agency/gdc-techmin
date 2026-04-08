import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useKanbanContext } from '@/context/useKanbanContext';
import { CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, OverlayTrigger, ProgressBar, Tooltip } from 'react-bootstrap';
const TaskItem = ({
  task: {
    commentsCount,
    title,
    description,
    image,
    members,
    share,
    variant,
    views,
    progress
  }
}) => {
  const {
    sectionModal
  } = useKanbanContext();
  return <CardBody>
      <div className="d-flex justify-content-between align-content-center mb-3">
        <button className={`btn-sm border-0 py-1 bg-${variant} text-white fs-12`}>
          <IconifyIcon icon="mdi:plus" />
          Add Tag
        </button>
        <Dropdown className="dropstart float-end">
          <DropdownToggle as="a" className={`text-${variant} content-none`}>
            <IconifyIcon icon="ri:more-2-fill" className="fs-20" />
          </DropdownToggle>
          <DropdownMenu>
            <li>
              <DropdownItem>
                <IconifyIcon icon="mdi:square-edit-outline" className="me-1" />
                Edit
              </DropdownItem>
            </li>
            <li>
              <DropdownItem>
                <IconifyIcon icon="mdi:delete" className="me-1" />
                Delete
              </DropdownItem>
            </li>
            <li>
              <DropdownItem>
                <IconifyIcon icon="mdi:account-plus" className="me-1" />
                Add People
              </DropdownItem>
            </li>
            <li>
              <DropdownItem>
                <IconifyIcon icon="mdi:location-enter" className="me-1" />
                Leave
              </DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>
      </div>
      <h4 className="mb-2">
        <span onClick={sectionModal.toggle} className="text-dark">
          {title}
        </span>
      </h4>
      {image && <div className="mb-2" style={{
      width: '100%',
      height: 150
    }}>
          <img src={image} alt="avatar" className="w-100 h-100" />
        </div>}
      {description && <p>{description}</p>}
      {progress && <ProgressBar variant={variant} now={progress} className="mb-2" style={{
      height: 6
    }} />}
      <div className="d-flex pt-2 justify-content-between align-items-center">
        <div className="avatar-group">
          {members.map((member, idx) => <OverlayTrigger overlay={<Tooltip>Tosha</Tooltip>} key={idx}>
              <img src={member} alt="avatar" className="rounded-circle avatar-xs" />
            </OverlayTrigger>)}
        </div>
        <div>
          <span className="me-2">
            <IconifyIcon icon="mdi:eye" /> {views}
          </span>
          <span className="me-2">
            <IconifyIcon icon="mdi:link-variant" /> {share}
          </span>
          <span>
            <IconifyIcon icon="mdi:message-badge-outline" /> {commentsCount}
          </span>
        </div>
      </div>
    </CardBody>;
};
export default TaskItem;