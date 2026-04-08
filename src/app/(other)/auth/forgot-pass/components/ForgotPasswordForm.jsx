import IconifyIcon from '@/components/wrappers/IconifyIcon';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const ForgotPasswordForm = () => {
  const resetPasswordSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('please enter your email')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(resetPasswordSchema)
  });
  return <form className="text-start" onSubmit={handleSubmit(() => {})}>
      <TextFormInput control={control} name="email" containerClassName="mb-3" label="Email address" id="email-id" placeholder="Enter your email" />
      <div className="mb-0 text-start">
        <Button variant="soft-primary" className="w-100" type="submit">
          <IconifyIcon icon="ri:loop-left-line" className="me-1 fw-bold" /> <span className="fw-bold">Reset Password</span>
        </Button>
      </div>
    </form>;
};
export default ForgotPasswordForm;