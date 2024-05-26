// libs
import { Link, useLocation } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import NavElements from '@/routes/NavElements';

/**
 * Presentational component for the nav menu
 *
 * @returns JSX.Element
 */
export default function Nav() {
  const { pathname } = useLocation();

  return (
    <FlexWrapper flexDirection="col" className="md:flex-row md:items-center">
      {NavElements.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.path}
            className={`text-main-50 hover:text-peach-darker mb-10 md:mb-0 mr-14 font-medium ${
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
