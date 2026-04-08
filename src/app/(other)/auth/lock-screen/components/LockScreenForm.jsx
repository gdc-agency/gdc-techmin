import PasswordFormInput from '@/components/form/PasswordFormInput';
import ThirdPartyLogin from '@/components/ThirdPartyLogin';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const LockScreenForm = () => {
  const lockScreenSchema = yup.object({
    password: yup.string().required('Please enter your password')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(lockScreenSchema)
  });
  return <form onSubmit={handleSubmit(() => {})}>
      <PasswordFormInput control={control} label="Password" name="password" containerClassName="mb-3" placeholder="Enter your password" id="password-id" />
      <div className="mb-0 text-start">
        <Button variant="soft-primary" className="w-100" type="submit">
          <IconifyIcon icon="ri:login-circle-fill" className="me-1" /> <span className="fw-bold">Log In</span>
        </Button>
      </div>
      <ThirdPartyLogin />
    </form>;
};
export default LockScreenForm;