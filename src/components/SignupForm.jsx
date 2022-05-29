import { useState } from 'react';
import { signUpWithEmailAndPassword } from '../utils/firebase/firebase';
import { success, failure } from '../utils/toasts';

import FormInput from './FormInput';
import Button from './Button';

const DEFAULT_FORM_FIELDS = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = ({ isLoading, setIsLoading }) => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const signUp = async (email, password, displayName) => {
    setIsLoading(true);
    try {
      await signUpWithEmailAndPassword(email, password, displayName);
      success('Signed up successfully!');
    } catch (error) {
      console.error(error.message);
      failure('Something went wrong');
    }
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      alert('Passwords must be the same!');
    }

    signUp(email, password, displayName);
  };

  return (
    <div className="w-full px-4">
      <h1 className="text-lg font-bold text-center mb-2">First Time?</h1>
      <form className="flex flex-col items-stretch" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={formFields.displayName}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formFields.password}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formFields.confirmPassword}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <Button customClass="self-center">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
