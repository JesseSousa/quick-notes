import { useState } from 'react';
import { signInWithGooglePopup } from '../utils/firebase';

import FormInput from './FormInput';
import Button from './Button';

const DEFAULT_FORM_FIELDS = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { email, password } = formFields;

  const googleSignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-full p-4 flex flex-col items-stretch">
      <h1 className="text-lg font-bold text-center mb-2">Welcome Back!</h1>
      <form className="flex flex-col items-stretch">
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="self-center">
          <Button style={{ marginRight: '.5rem' }}>Sign In</Button>
          <Button buttonType="google" onClick={googleSignIn}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
