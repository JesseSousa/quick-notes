import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../utils/firebase/firebase';
import { success, failure } from '../utils/toasts';

import FormInput from './FormInput';
import Button from './Button';

const DEFAULT_FORM_FIELDS = {
  email: '',
  password: '',
};

const LoginForm = ({ isLoading, setIsLoading }) => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { email, password } = formFields;

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      success("You're logged in");
    } catch (error) {
      console.error(error.message);
      failure('Something went wrong');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await signInUserWithEmailAndPassword(email, password);
      success("You're logged in!");
    } catch (error) {
      console.error(error.message);

      switch (error.code) {
        case 'auth/user-not-found':
          failure('User was not found');
          break;

        case 'auth/wrong-password':
          failure('Wrong password');
          break;

        default:
          failure('Something went wrong');
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full p-4 flex flex-col items-stretch">
      <h1 className="text-lg font-bold text-center mb-2">Welcome Back!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-stretch">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <div className="self-center">
          <Button type="submit" style={{ marginRight: '.5rem' }}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
