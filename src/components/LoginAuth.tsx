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
import { messageToastError } from '@/utils/helpers';

const LoginFormComponent = Loadable(
  lazy(() => import('@/components/forms/Login.form'))
);

/**
 * This component contains all the logic for the auth workflow on the app.
 *
 * The login and singup business logic is here.
 *
 * @returns JSX
 */
function LoginAuth() {
  // TODO remove console logs once prod ready
  const { setShowLoader, isOpen, setIsOpen } = useContext(ModalContext);
  const { setToken } = useStore();
  const { mutate, data } = useQueryMutation(loginUserApi, 'login', {
    onSuccess: (result) => {
      setToken(result.auth_token);
      setShowLoader(false);
    },
    onError: (error) => {
      messageToastError(error.response.data.error);
      setShowLoader(false);
    },
  });

  console.log(data);

  const handleOnClickLogin = () => {
    setIsOpen({
      id: 'login',
      state: true,
    });
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
