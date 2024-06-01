// libs
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import NavElements from '@/routes/NavElements';
import { MenuContext } from '@/context/MenuContext';

/**
 * Presentational component for the nav menu
 *
 * @returns JSX.Element
 */
export default function Nav() {
  const { pathname } = useLocation();
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleNavigate = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <FlexWrapper flexDirection="col" className="xl:flex-row xl:items-center">
      {NavElements.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.path}
            onClick={handleNavigate}
            className={`text-main-50 hover:text-peach-darker mb-10 xl:mb-0 mr-14 font-medium text-sm ${
              item.path === pathname ? 'text-peach-darker' : ''
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </FlexWrapper>
  );
}
