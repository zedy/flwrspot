// components
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import FlexWrapper from '../elements/FlexWrapper';

export default function Layout() {
  return (
    <FlexWrapper
      flexDirection="col"
      justifyContent="between"
      alignItems="center"
      className="layout w-full min-h-screen"
    >
      <Header />
      <Main />
    </FlexWrapper>
  );
}
