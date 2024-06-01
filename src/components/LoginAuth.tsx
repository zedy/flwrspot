// libs
import { lazy, useContext, memo } from 'react';

// components
import { useStore } from '@/store/store';
import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import useQueryMutation from '@/hooks/useQueryMutation';
import { loginUserApi } from '@/api/auth';
import Loadable from '@/components/Loadable';
import { messageToastError, messageToastSuccess } from '@/utils/helpers';
import { MenuContext } from '@/context/MenuContext';

const LoginFormComponent = Loadable(
  lazy(() => import('@/components/forms/Login.form'))
);

/**
 * This component contains all the logic for the auth login workflow on the app.
 *
 * Workflow: after the users fills in all fields (all fields are required) we will
 * make a POST request to /users/login and get the auth_token (jwt) which the app
 * will pass to UserAuth to fetch the details of the logged in user from /users/me
 *
 * @returns JSX
 */
function LoginAuth() {
  // TODO remove console logs once prod ready
  const { setShowLoader, isOpen, setIsOpen } = useContext(ModalContext);
  const { setToken } = useStore();
  const { setIsOpen: setIsDrawerOpen } = useContext(MenuContext);
  const { mutate } = useQueryMutation(loginUserApi, 'login', {
    onSuccess: (result) => {
      setToken(result.auth_token);
      setShowLoader(false);
      messageToastSuccess(
        'Congratulations! You have successfully logged into FlowrSpot!'
      );
    },
    onError: (error: any) => {
      messageToastError(error.response.data.error);
      setShowLoader(false);
    },
  });

  const handleOnClickLogin = () => {
    setIsOpen({
      id: 'login',
      state: true,
    });
    setIsDrawerOpen(false);
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
      <Modal isOpen={isOpen} id="login" title="Welcome Back">
        <LoginFormComponent mutationCallback={mutate} />
      </Modal>
    </>
  );
}

export default memo(LoginAuth);
