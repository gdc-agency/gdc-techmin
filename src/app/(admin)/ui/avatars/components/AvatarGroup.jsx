import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
const AvatarGroup = () => {
  return <div className="avatar-group">
      <OverlayTrigger overlay={<Tooltip>Tosha</Tooltip>}>
        <span role="button">
          <img src={avatar1} alt="avatar" className="rounded-circle avatar-sm" style={{
          marginLeft: '-10px'
        }} />
        </span>
      </OverlayTrigger>
      <OverlayTrigger overlay={<Tooltip>Brain</Tooltip>}>
        <span role="button">
          <img src={avatar3} alt="avatar" className="rounded-circle avatar-sm" style={{
          marginLeft: '-10px'
        }} />
        </span>
      </OverlayTrigger>
      <OverlayTrigger overlay={<Tooltip>Hooker</Tooltip>}>
        <span role="button">
          <div className="avatar-sm" style={{
          marginLeft: '-10px'
        }}>
            <div className="avatar-title rounded-circle bg-light text-primary">K</div>
          </div>
        </span>
      </OverlayTrigger>
      <OverlayTrigger overlay={<Tooltip>More +</Tooltip>}>
        <span role="button">
          <div className="avatar-sm" style={{
          marginLeft: '-10px'
        }}>
            <div className="avatar-title rounded-circle">9+</div>
          </div>
        </span>
      </OverlayTrigger>
    </div>;
};
export default AvatarGroup;