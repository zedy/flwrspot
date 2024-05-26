// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Nav from '@/components/elements/Nav';
import LoginAuth from '@/components/LoginAuth';
import SignupAuth from '@/components/SignupAuth';
import UserAuth from '@/components/UserAuth';
import { useStore } from '@/store/store';

/**
 * Wrapper component for the desktop navigation.
 *
 * The reason for splitting up the Desktop and Mobile was just
 * code clarity and modularity.
 *
 * @returns JSX
 */
export default function DesktopMenu() {
  const { token } = useStore();

  return (
    <FlexWrapper className="!w-auto hidden md:flex" alignItems="center">
      <Nav />
      {!token ? (
        <>
          <LoginAuth />
          <SignupAuth />
        </>
      ) : (
        <UserAuth />
      )}
    </FlexWrapper>
  );
}
