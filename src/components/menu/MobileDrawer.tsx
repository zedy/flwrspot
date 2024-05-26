// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Nav from '@/components/elements/Nav';
import LoginAuth from '@/components/LoginAuth';
import SignupAuth from '@/components/SignupAuth';
import UserAuth from '@/components/UserAuth';
import { useStore } from '@/store/store';

type Props = {
  isOpen: boolean;
};

/**
 * Wrapper component for the mobile navigation.
 *
 * The reason for splitting up the Desktop and Mobile was just
 * code clarity and modularity.
 *
 * @returns JSX
 */
export default function MobileDrawer({ isOpen }: Props) {
  const { token } = useStore();

  return (
    <FlexWrapper
      className={`md:hidden transition-all duration-200 translate-x-[768px] absolute left-0 top-20 right-0 bottom-0 bg-main-0 z-50 p-8 md:p-0 ${
        isOpen ? 'translate-x-0' : ''
      }`}
      flexDirection="col"
    >
      {token && <UserAuth />}
      <Nav />
      {!token && (
        <>
          <LoginAuth />
          <SignupAuth />
        </>
      )}
    </FlexWrapper>
  );
}
