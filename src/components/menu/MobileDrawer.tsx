// libs
import { useContext } from 'react';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Nav from '@/components/elements/Nav';
import LoginAuth from '@/components/LoginAuth';
import SignupAuth from '@/components/SignupAuth';
import UserAuth from '@/components/UserAuth';
import { useStore } from '@/store/store';
import { MenuContext } from '@/context/MenuContext';
import useMediaQuery from '@/hooks/useMediaQuery';

/**
 * Wrapper component for the mobile navigation.
 *
 * The reason for splitting up the Desktop and Mobile was just
 * code clarity and modularity.
 *
 * @returns JSX
 */
export default function MobileDrawer() {
  const { token } = useStore();
  const { isOpen } = useContext(MenuContext);
  const isLg = useMediaQuery('lg');

  return (
    <FlexWrapper
      className={`mobile xl:hidden transition-all duration-200 translate-x-[1220px] absolute left-0 top-20 right-0 bottom-0 bg-main-0 z-50 p-8 xl:p-0 ${
        isOpen ? '!translate-x-0' : ''
      }`}
      flexDirection="col"
    >
      {token && <UserAuth />}
      <Nav />
      {!token && !isLg && (
        <>
          <LoginAuth />
          <SignupAuth />
        </>
      )}
    </FlexWrapper>
  );
}
