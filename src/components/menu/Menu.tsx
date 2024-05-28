// components
import DesktopMenu from '@/components/menu/DesktopMenu';
import MobileDrawer from '@/components/menu/MobileDrawer';
import BurgerMenu from '@/components/BurgerMenu';
import { MenuContextProvider } from '@/context/MenuContext';

/**
 * Wrapper component for the mobile and desktop menu/drawers.
 *
 * @returns JSX
 */
export default function Menu() {
  return (
    <MenuContextProvider>
      <BurgerMenu />
      <DesktopMenu />
      <MobileDrawer />
    </MenuContextProvider>
  );
}
