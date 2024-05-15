// libs
import { RouterProvider } from 'react-router-dom';

// router
import Router from '@/routes/MainRoutes';

// Component
export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden bg-stone-100">
      <RouterProvider router={Router} />
      <div id="modal-root" />
    </div>
  );
}
