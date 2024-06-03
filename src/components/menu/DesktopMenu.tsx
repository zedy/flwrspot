// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Nav from '@/components/elements/Nav';
import LoginAuth from '@/components/LoginAuth';
import SignupAuth from '@/components/SignupAuth';
import UserAuth from '@/components/UserAuth';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useStore } from '@/store/store';

/**
 * Wrapper component for the desktop navigation.
 *
 * The reason for splitting up the Desktop and Mobile was just
 * code clarity and modularity.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function DesktopMenu() {
  const { token } = useStore();
  const isLg = useMediaQuery('lg');

  return (
    <FlexWrapper className="desktop !w-auto hidden xl:flex" alignItems="center">
      <Nav />
      {isLg && !token ? (
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
