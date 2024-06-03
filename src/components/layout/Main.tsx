// libs
import { Outlet } from 'react-router-dom';

/**
 * Basic presentational component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function Main() {
  return (
    <main className="w-full h-full flex justify-center items-center flex-col flex-grow">
      <Outlet />
    </main>
  );
}
