// libs
import { Link } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Container from '@/components/layout/Container';
import Menu from '@/components/menu/Menu';

// assets
import logo from '@/assets/logo.svg';

/**
 * Presentational component for the Header and navigation
 *
 * @returns JSX
 */
export default function Header() {
  return (
    <header className="w-full flex justify-center h-20 bg-main-0 font-montserrat">
      <Container>
        <FlexWrapper
          justifyContent="between"
          alignItems="center"
          className="h-full"
        >
          <Link to="/" className="text-main-50 hover:text-main-75 mr-14">
            <img src={logo} alt="logo" />
          </Link>
          <Menu />
        </FlexWrapper>
      </Container>
    </header>
  );
}
