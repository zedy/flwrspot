// libs
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// router
import Router from '@/routes/MainRoutes';
import { ModalContextProvider } from '@/context/ModalContext';
import ReactQueryProvider from '@/context/ReactQuery';

// Component
export default function App() {
  return (
    <ReactQueryProvider>
      <div className="App w-screen min-h-screen overflow-x-hidden">
        <ModalContextProvider>
          <RouterProvider router={Router} />
        </ModalContextProvider>
        <Toaster />
        <div id="modal-root" />
      </div>
    </ReactQueryProvider>
  );
}
