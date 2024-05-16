// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Container from './Container';
import Button from '@/components/elements/Button';

// assets
import logo from '@/assets/logo.svg';

/**
 * Presentational component for the Header and navigation
 *
 * @returns JSX
 */
export default function Header() {
  return (
    <header className="w-full flex justify-center h-20 bg-main-0">
      <Container>
        <FlexWrapper
          justifyContent="between"
          alignItems="center"
          classes="h-full"
        >
          <img src={logo} alt="logo" />
          <FlexWrapper classes="!w-auto">
            <div>nav</div>
            <Button>New Account</Button>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </header>
  );
}
