// libs
import { Outlet } from 'react-router-dom';

// Component
export default function Main() {
  return (
    <main className="w-full h-full flex items-center flex-col">
      <Outlet />
    </main>
  );
}
