// libs
import { useContext } from 'react';

// components
import Button from '@/components/elements/Button';

// assets
import burgerMenuIcon from '@/assets/mm_hamburger.svg';
import closeIcon from '@/assets/pl-icon-close.svg';
import { MenuContext } from '@/context/MenuContext';

/**
 * Burger menu icon component
 *
 * @returns JSX
 */
export default function BurgerMenu() {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <Button
      version="icon-only"
      icon={
        <img
          width={24}
          src={isOpen ? closeIcon : burgerMenuIcon}
          alt="burger-menu"
        />
      }
      className="xl:hidden z-50"
      onClick={() => setIsOpen(!isOpen)}
    />
  );
}
