import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button } from 'react-bootstrap';
const SidePanel = ({
  createNewEvent
}) => {
  // external events
  const externalEvents = [{
    id: 1,
    variant: 'success',
    title: 'New Theme Release'
  }, {
    id: 2,
    variant: 'info',
    title: 'My Event'
  }, {
    id: 3,
    variant: 'warning',
    title: 'Meet Manager'
  }, {
    id: 4,
    variant: 'danger',
    title: 'Create New theme'
  }];
  return <>
      <div className="d-grid">
        <Button variant="danger" size="lg" className="fs-16 flex-centered gap-1" onClick={createNewEvent} id="btn-new-event">
          <IconifyIcon icon="mdi:plus-circle" /> Create New Event
        </Button>
      </div>
      <div id="external-events" className="mt-3">
        <p className="text-muted">Drag and drop your event or click in the calendar</p>
        {externalEvents.map(({
        id,
        variant,
        title
      }) => <div key={id} className={`external-event rounded-0 bg-${variant}-subtle text-${variant}`} title={title} data-class={`bg-${variant}`}>
            <IconifyIcon icon="mdi:record-circle" className="me-2 vertical-middle" />
            {title}
          </div>)}
      </div>
      <div className="mt-5 d-none d-xl-block">
        <h5 className="text-center">How It Works ?</h5>
        <ul className="ps-3">
          <li className="text-muted mb-3">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </li>
          <li className="text-muted mb-3">
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
            from a Lorem Ipsum passage.
          </li>
          <li className="text-muted mb-3">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </li>
        </ul>
      </div>
    </>;
};
export default SidePanel;