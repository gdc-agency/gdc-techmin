import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { Alert, Button } from 'react-bootstrap';
const LiveAlert = () => {
  const {
    isTrue: showAlert,
    toggle: toggleAlert
  } = useToggle();
  return <ComponentContainerCard title="Live Alert" description={<p className="text-muted fs-14 mb-0">
          Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.
        </p>}>
      <div className="tab-pane show active" id="live-alert-preview">
        <Alert show={showAlert} onClose={toggleAlert} variant="success" dismissible role="alert">
          <div>Nice, you triggered this alert message!</div>
        </Alert>

        <Button variant="primary" type="button" onClick={toggleAlert}>
          Show live alert
        </Button>
      </div>
    </ComponentContainerCard>;
};
export default LiveAlert;