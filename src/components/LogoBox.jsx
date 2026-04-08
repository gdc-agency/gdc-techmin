import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import logoSm from '@/assets/images/logo-sm.png';
import logoDark from '@/assets/images/logo-dark.png';
const LogoBox = () => {
  return <>
      <Link to="/" className="logo logo-light">
        <span className="logo-lg">
          <img src={logo} className="w-auto" alt="logo" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} className="w-auto" alt="small logo" />
        </span>
      </Link>

      <Link to="/" className="logo logo-dark">
        <span className="logo-lg">
          <img src={logoDark} alt="dark logo" className="w-auto" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} alt="small logo" className="w-auto" />
        </span>
      </Link>
    </>;
};
export default LogoBox;