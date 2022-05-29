import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Container from '../components/Container';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import LoadingAnimation from '../components/LoadingAnimation';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
          <LoadingAnimation />
        </div>
      )}
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full">
        <LoginForm {...{ isLoading, setIsLoading }} />
        <div className="w-full h-px my-4 md:w-px bg-stone-300 md:h-full md:my-0 md:mx-2"></div>
        <SignupForm {...{ isLoading, setIsLoading }} />
        <Toaster />
      </div>
    </Container>
  );
};

export default Login;
