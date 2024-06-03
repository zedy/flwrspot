// libs
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Container from '@/components/layout/Container';
import Menu from '@/components/menu/Menu';
import { MenuContext } from '@/context/MenuContext';

// assets
import logo from '@/assets/logo.svg';

/**
 * Functional component for the Header html5 element of the app.
 * It controlls the visibility of the Mobile drawer when navigating
 * to another page.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} children - The children elements to be wrapped.
 * @param {boolean} padding - Controlls the type of padding the component provides.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Header() {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleNavigate = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className="header w-full flex justify-center h-20 bg-main-0 font-montserrat">
      <Container>
        <FlexWrapper
          justifyContent="between"
          alignItems="center"
          className="h-full"
        >
          <Link
            to="/"
            onClick={handleNavigate}
            className="text-main-50 hover:text-main-75 mr-14"
          >
            <img src={logo} alt="logo" />
          </Link>
          <Menu />
        </FlexWrapper>
      </Container>
    </header>
  );
}
