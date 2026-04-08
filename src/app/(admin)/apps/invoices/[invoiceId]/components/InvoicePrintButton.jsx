import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button } from 'react-bootstrap';
const InvoicePrintButton = () => {
  return <Button variant="soft-primary" onClick={() => window.print()} className="me-1">
      <IconifyIcon icon="mdi:printer-outline " className="lh-sm" /> Print
    </Button>;
};
export default InvoicePrintButton;