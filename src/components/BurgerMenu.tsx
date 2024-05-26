// libs
import { Dispatch, SetStateAction } from 'react';

// components
import Button from '@/components/elements/Button';

// assets
import burgerMenuIcon from '@/assets/mm_hamburger.svg';
import closeIcon from '@/assets/pl-icon-close.svg';

type Props = {
  isOpen: boolean;
  handleCallback: Dispatch<SetStateAction<boolean>>;
};

/**
 * Burger menu icon component
 *
 * @returns JSX
 */
export default function BurgerMenu({ isOpen, handleCallback }: Props) {
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
      className="bg-transparent md:hidden p-0 mr-7 z-50"
      onClick={() => handleCallback(!isOpen)}
    />
  );
}
