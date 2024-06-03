// components
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import FlexWrapper from '../elements/FlexWrapper';
import { MenuContextProvider } from '@/context/MenuContext';

/**
 * Basic presentational component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function Layout() {
  return (
    <FlexWrapper
      flexDirection="col"
      justifyContent="between"
      alignItems="center"
      className="layout w-full min-h-screen"
    >
      <MenuContextProvider>
        <Header />
      </MenuContextProvider>
      <Main />
    </FlexWrapper>
  );
}
