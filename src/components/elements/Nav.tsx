// libs
import { Link } from 'react-router-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import NavElements from '@/routes/NavElements';

/**
 * Presentational component for the nav menu
 *
 * @TODO integrate active link!
 * @returns JSX.Element
 */
export default function Nav() {
  return (
    <FlexWrapper>
      {NavElements.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.path}
            className="text-main-50 hover:text-main-75 mr-14"
          >
            {item.label}
          </Link>
        );
      })}
    </FlexWrapper>
  );
}
