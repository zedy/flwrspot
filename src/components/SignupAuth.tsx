// libs
import { lazy, useContext, memo } from 'react';

// components
import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import useQueryMutation from '@/hooks/useQueryMutation';
import { registerUserApi } from '@/api/auth';
import Loadable from '@/components/Loadable';
import { messageToastError, messageToastSuccess } from '@/utils/helpers';
import { useStore } from '@/store/store';
import { MenuContext } from '@/context/MenuContext';

const SignupFormComponent = Loadable(
  lazy(() => import('@/components/forms/Signup.form'))
);

/**
 * This component contains all the logic for the auth signup workflow on the app.
 *
 * Workflow: users fills in all fields (all fields are required) after which
 * we will receive the auth_token, we'll pass this to the UserAuth component
 * which will login the user and fetch the details from the /users/me api
 *
 * @returns {JSX.Element} - The rendered component.
 */
function SignupAuth() {
  const { setToken } = useStore();
  const { setShowLoader, isOpen, setIsOpen } = useContext(ModalContext);
  const { setIsOpen: setIsDrawerOpen } = useContext(MenuContext);
  const { mutate } = useQueryMutation(registerUserApi, 'signup', {
    onSuccess: (result) => {
      setToken(result.auth_token);
      setShowLoader(false);
      messageToastSuccess(
        'Congratulations! You have successfully signed up for FlowrSpot!'
      );
    },
    onError: (error: any) => {
      messageToastError(error.response.data.error);
      setShowLoader(false);
    },
  });

  const handleOnClickRegister = () => {
    setIsOpen({
      id: 'signup',
      state: true,
    });
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Button
        version="cta"
        onClick={handleOnClickRegister}
        className="signup-trigger mt-12 xl:mt-0"
      >
        New Account
      </Button>
      <Modal isOpen={isOpen} id="signup" title="Create an Account">
        <SignupFormComponent mutationCallback={mutate} />
      </Modal>
    </>
  );
}

export default memo(SignupAuth);
