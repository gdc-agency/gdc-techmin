import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import logoDark from '@/assets/images/logo-dark.png';
const AuthLogo = () => {
  return <div className="auth-brand p-4 text-center">
      <Link to="/" className="logo-light">
        <img src={logo} alt="logo" height={28} />
      </Link>
      <Link to="/" className="logo-dark">
        <img src={logoDark} alt="dark logo" height={28} />
      </Link>
    </div>;
};
export default AuthLogo;