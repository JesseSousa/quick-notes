import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Container from '../components/Container';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <LoginForm />
        <div className="w-full h-px my-4 md:w-px bg-stone-300 md:h-full md:my-0 md:mx-2"></div>
        <SignupForm />
        <Toaster />
      </div>
    </Container>
  );
};

export default Login;
