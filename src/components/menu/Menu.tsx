// components
import DesktopMenu from '@/components/menu/DesktopMenu';
import MobileDrawer from '@/components/menu/MobileDrawer';
import BurgerMenu from '@/components/BurgerMenu';

/**
 * Wrapper component for the mobile and desktop menu/drawers.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function Menu() {
  return (
    <>
      <BurgerMenu />
      <DesktopMenu />
      <MobileDrawer />
    </>
  );
}
