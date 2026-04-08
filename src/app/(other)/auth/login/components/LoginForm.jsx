import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ThirdPartyLogin from '@/components/ThirdPartyLogin';
import { Link } from 'react-router-dom';
import TextFormInput from '@/components/form/TextFormInput';
import useSignIn from './useSignIn';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import { Button, FormCheck } from 'react-bootstrap';
import { Fragment } from 'react';
const LoginForm = () => {
  const {
    control,
    loading,
    login
  } = useSignIn();
  return <form onSubmit={login} className="text-start">
      <TextFormInput control={control} name="email" containerClassName="mb-3" label="Email address" id="email-id" placeholder="Enter your email" />

      <PasswordFormInput control={control} name="password" containerClassName="mb-3" placeholder="Enter your password" id="password-id" label={<Fragment>
            <Link to="/auth/forgot-pass" className="text-muted float-end">
              <small>Forgot your password?</small>
            </Link>
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </Fragment>} />

      <div className="mb-3">
        <FormCheck label="Remember me" id="sign-in" />
      </div>
      <div className="mb-0 text-start">
        <Button variant="soft-primary" disabled={loading} className="w-100" type="submit">
          <IconifyIcon icon="ri:login-circle-fill" className="me-1" /> <span className="fw-bold">Log In</span>
        </Button>
      </div>
      <ThirdPartyLogin />
    </form>;
};
export default LoginForm;