import ThirdPartyLogin from '@/components/ThirdPartyLogin';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextFormInput from '@/components/form/TextFormInput';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import { FormCheck } from 'react-bootstrap';
const RegisterForm = () => {
  const signUpSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('Please enter a valid email').required('please enter your email'),
    password: yup.string().required('Please enter your password')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });
  return <form onSubmit={handleSubmit(() => {})} className="text-start">
      <TextFormInput control={control} name="name" containerClassName="mb-3" label="Full Name" id="name" placeholder="Enter your name" />
      <TextFormInput control={control} name="email" containerClassName="mb-3" label="Email address" id="email-id" placeholder="Enter your email" />
      <PasswordFormInput control={control} name="password" containerClassName="mb-3" placeholder="Enter your password" id="password-id" label="Password" />
      <div className="mb-3">
        <FormCheck label="I accept Terms and Condition" id="termAndCondition2" />
      </div>
      <div className="mb-0 d-grid text-center">
        <button className="btn btn-primary fw-semibold" type="submit">
          Sign Up
        </button>
      </div>
      <ThirdPartyLogin />
    </form>;
};
export default RegisterForm;