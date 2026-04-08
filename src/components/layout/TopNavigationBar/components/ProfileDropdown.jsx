import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useAuthContext } from '@/context/useAuthContext';
const ProfileDropdown = () => {
  const {
    removeSession
  } = useAuthContext();
  const navigate = useNavigate();
  const logout = () => {
    removeSession();
    navigate('/auth/logout');
  };
  return <Dropdown>
      <DropdownToggle as="a" className="nav-link arrow-none nav-user" role="button" aria-haspopup="false" aria-expanded="false">
        <span className="account-user-avatar">
          <img src={avatar1} alt="user-image" width={32} className="rounded-circle" />
        </span>
        <span className="d-lg-block d-none">
          <h5 className="my-0 fw-normal">
            Adams
            <IconifyIcon icon="ri:arrow-down-s-line" className="fs-22 d-none d-sm-inline-block align-middle" />
          </h5>
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end dropdown-menu-animated profile-dropdown">
        <DropdownHeader className="noti-title">
          <h6 className="text-overflow m-0">Welcome !</h6>
        </DropdownHeader>
        <Link to="/pages/profile" className="dropdown-item">
          <IconifyIcon icon="ri:account-pin-circle-line" className="fs-16 align-middle me-1 " />
          <span>My Account</span>
        </Link>
        <Link to="/pages/profile" className="dropdown-item">
          <IconifyIcon icon="ri:settings-4-line" className="fs-16 align-middle me-1" />
          <span>Settings</span>
        </Link>
        <Link to="/pages/faqs" className="dropdown-item">
          <IconifyIcon icon="ri:customer-service-2-line" className="fs-16 align-middle me-1" />
          <span>Support</span>
        </Link>
        <Link to="/auth/lock-screen" className="dropdown-item">
          <IconifyIcon icon="ri:lock-line" className="fs-16 align-middle me-1" />
          <span>Lock Screen</span>
        </Link>
        <DropdownItem onClick={logout}>
          <IconifyIcon icon="ri:logout-circle-r-line" className="align-middle me-1" />
          <span>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>;
};
export default ProfileDropdown;