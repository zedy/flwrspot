// libs
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// router
import Router from '@/routes/MainRoutes';

// Component
export default function App() {
  return (
    <div className="App w-screen min-h-screen overflow-x-hidden bg-stone-100">
      <RouterProvider router={Router} />
      <Toaster />
      <div id="modal-root" />
    </div>
  );
}
