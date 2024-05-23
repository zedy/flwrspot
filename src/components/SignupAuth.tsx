// libs
import { lazy, useContext, useState, memo } from 'react';

// components
import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import useQueryMutation from '@/hooks/useQueryMutation';
import { registerUserApi } from '@/api/auth';
import Loadable from '@/components/Loadable';
import { messageToastError } from '@/utils/helpers';

const SignupFormComponent = Loadable(
  lazy(() => import('@/components/forms/Signup.form'))
);
const RegistrationCompleteComponent = Loadable(
  lazy(() => import('@/components/modals/RegistrationSuccess'))
);

/**
 * This component contains all the logic for the auth workflow on the app.
 *
 * The login and singup business logic is here.
 *
 * @returns JSX
 */
function SignupAuth() {
  const [renderComponent, setRenderComponent] = useState<string>('');
  const { setShowLoader, isOpen, setIsOpen } = useContext(ModalContext);
  const { mutate, data } = useQueryMutation(registerUserApi, 'signup', {
    onSuccess: (result) => {
      console.log('User created successfully:', result);
      setRenderComponent('registerComplete');
    },
    onError: (error) => {
      messageToastError(error.response.data.error);
      setShowLoader(false);
    },
  });

  console.log('signup auth');
  console.log(data);

  const handleOnClickRegister = () => {
    setRenderComponent('signup');
    setIsOpen({
      id: 'signup',
      state: true,
    });
  };

  const renderModalContent = () => {
    switch (renderComponent) {
      case 'signup':
        return <SignupFormComponent mutationCallback={mutate} />;
      case 'registerComplete':
        return <RegistrationCompleteComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button onClick={handleOnClickRegister} className="min-w-[140px]">
        New Account
      </Button>
      <Modal isOpen={isOpen} id="signup" title="Create an Account">
        {renderModalContent()}
      </Modal>
    </>
  );
}

export default memo(SignupAuth);
