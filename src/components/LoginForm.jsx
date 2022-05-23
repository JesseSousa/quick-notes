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
    <div>
      <form>
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>
      <Button buttonType="google" onClick={googleSignIn}>
        Sign In with Google
      </Button>
    </div>
  );
};

export default LoginForm;
