// libs
import { Link } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Container from '@/components/layout/Container';
import Nav from '@/components/elements/Nav';
import LoginAuth from '@/components/LoginAuth';
import SignupAuth from '@/components/SignupAuth';
import UserAuth from '@/components/UserAuth';
import { useStore } from '@/store/store';

// assets
import logo from '@/assets/logo.svg';

/**
 * Presentational component for the Header and navigation
 *
 * @returns JSX
 */
export default function Header() {
  const { currentUser } = useStore();

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
            {!currentUser ? (
              <>
                <LoginAuth />
                <SignupAuth />
              </>
            ) : (
              <UserAuth />
            )}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </header>
  );
}
