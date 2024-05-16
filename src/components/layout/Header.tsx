// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Container from './Container';
import Button from '@/components/elements/Button';
import Typography, { Type } from '@/components/elements/Typography';
import Nav from '@/components/elements/Nav';

// assets
import logo from '@/assets/logo.svg';

/**
 * Presentational component for the Header and navigation
 *
 * @returns JSX
 */
export default function Header() {
  const handleOnClick = () => {
    console.log('new account triggered');
  };

  return (
    <header className="w-full flex justify-center h-20 bg-main-0v font-montseratt">
      <Container>
        <FlexWrapper
          justifyContent="between"
          alignItems="center"
          classes="h-full"
        >
          <img src={logo} alt="logo" />
          <FlexWrapper classes="!w-auto" alignItems="center">
            <Nav />
            <Typography
              classes="text-peach-darker cursor-pointer mr-[30px]"
              component={Type.SPAN}
            >
              Login
            </Typography>
            <Button onClick={handleOnClick} className="min-w-[140px]">
              New Account
            </Button>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </header>
  );
}
