// libs
import { useEffect, useState } from 'react';

// components
import DesktopMenu from '@/components/menu/DesktopMenu';
import MobileDrawer from '@/components/menu/MobileDrawer';
import BurgerMenu from '@/components/BurgerMenu';
import useMediaQuery from '@/hooks/useMediaQuery';

/**
 * Wrapper component for the mobile and desktop menu/drawers.
 *
 * @returns JSX
 */
export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const isSm = useMediaQuery('sm');

  useEffect(() => {
    if (open && !isSm) {
      setOpen(false);
    }
  }, [isSm]);

  return (
    <>
      <BurgerMenu isOpen={open} handleCallback={setOpen} />
      <DesktopMenu />
      <MobileDrawer isOpen={open} />
    </>
  );
}
