// libs
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Container from './Container';
import Button from '@/components/elements/Button';
import Nav from '@/components/elements/Nav';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import useQueryMutation from '@/hooks/useQueryMutation';
import { registerUserApi } from '@/api/auth';

// assets
import logo from '@/assets/logo.svg';
import SignupForm from '@/components/forms/Signup.form';

/**
 * Presentational component for the Header and navigation
 *
 * @returns JSX
 */
export default function Header() {
  const { isLoading, mutate } = useQueryMutation(registerUserApi);
  const { setIsOpen, isOpen } = useContext(ModalContext);

  const handleOnClickRegister = () => {
    setIsOpen(true);
  };

  const handleOnClickLogin = () => {
    setIsOpen(true);
  };

  return (
    <header className="w-full flex justify-center h-20 bg-main-0v font-montserrat">
      <Container>
        <FlexWrapper
          justifyContent="between"
          alignItems="center"
          classes="h-full"
        >
          <Link to="/" className="text-main-50 hover:text-main-75 mr-14">
            <img src={logo} alt="logo" />
          </Link>

          <FlexWrapper classes="!w-auto" alignItems="center">
            <Nav />
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
          </FlexWrapper>
        </FlexWrapper>
      </Container>
      <Modal isOpen={isOpen} title="Create an Account">
        <FlexWrapper flexDirection="col">
          <SignupForm mutationCallback={mutate} />
          <Button
            version="outline"
            className="w-full !rounded mt-5"
            onClick={() => setIsOpen(false)}
          >
            I don't want to register
          </Button>
        </FlexWrapper>
      </Modal>
    </header>
  );
}
