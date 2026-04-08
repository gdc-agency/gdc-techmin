import ComponentContainerCard from '@/components/ComponentContainerCard';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
const CheckAndRadioButtons = () => {
  return <ComponentContainerCard title="Checkbox and radio button groups" description="Combine button-like checkbox and radio toggle buttons into a seamless looking button group.">
      <ToggleButtonGroup type="checkbox" className="mt-2">
        <ToggleButton variant="outline-primary" id="tbg-check-1" value={1}>
          Checkbox 1
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="tbg-check-2" value={2}>
          Checkbox 2
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="tbg-check-3" value={3}>
          Checkbox 3
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options" className="mt-2 ms-1" defaultValue={1}>
        <ToggleButton variant="outline-primary" id="tbg-radio-1" value={1}>
          Radio 1
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </ComponentContainerCard>;
};
export default CheckAndRadioButtons;