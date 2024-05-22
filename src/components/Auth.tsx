// libs
import { lazy, useContext, useState } from 'react';

// components
import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import useQueryMutation from '@/hooks/useQueryMutation';
import registerUserApi from '@/api/auth';
import Loadable from '@/components/Loadable';

const SignupFormComponent = Loadable(
  lazy(() => import('@/components/forms/Signup.form'))
);
const RegistrationCompleteComponent = Loadable(
  lazy(() => import('@/components/modals/RegistrationSuccess'))
);
const LoginFormComponent = Loadable(
  lazy(() => import('@/components/forms/Signup.form'))
);

/**
 * This component contains all the logic for the auth workflow on the app.
 *
 * The login and singup business logic is here.
 *
 * @returns JSX
 */
export default function Auth() {
  const [renderComponent, setRenderComponent] = useState<string>('');
  const { isLoading, mutate, isSuccess } = useQueryMutation(registerUserApi);
  const { setIsOpen, isOpen, setShowLoader } = useContext(ModalContext);
  const [title, setTitle] = useState<string>('');

  const handleOnClickRegister = () => {
    setTitle('Create an Account');
    setRenderComponent('signup');
    setIsOpen(true);
  };

  const handleOnClickLogin = () => {
    setTitle('Welcome Back');
    setRenderComponent('login');
    setIsOpen(true);
  };

  if (isLoading) {
    setShowLoader(true);
  }

  if (isSuccess) {
    setTitle('Registration Complete');
    setRenderComponent('registerComplete');
  }

  const renderModalContent = () => {
    switch (renderComponent) {
      case 'signup':
        return <SignupFormComponent mutationCallback={mutate} />;
      case 'login':
        return <LoginFormComponent />;
      case 'registerComplete':
        return <RegistrationCompleteComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        version="outline"
        onClick={handleOnClickLogin}
        className="mr-[30px]"
      >
        Login
      </Button>
      <Button onClick={handleOnClickRegister} className="min-w-[140px]">
        New Account
      </Button>
      <Modal isOpen={isOpen} title={title}>
        {renderModalContent()}
      </Modal>
    </>
  );
}
