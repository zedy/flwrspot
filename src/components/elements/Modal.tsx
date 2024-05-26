// libs
import { useContext } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';
import { ModalContext } from '@/context/ModalContext';
import Loader from '@/components/Loader';

type ModalProperties = {
  children: React.ReactNode;
  title?: string;
  id: string;
  isOpen: any;
};

/**
 * The main component for displaying modals accross the app.
 * It takes a child which is the modal content (the content displayed
 * within the modal itself). All other logic is in the ModalContext
 *
 * @param ModalProperties
 * @returns JSX
 */
function Modal({ children, title, id, isOpen }: ModalProperties) {
  // TODO disable scroll on body when open
  const { setIsOpen, showLoader } = useContext(ModalContext);

  // this has to be separate otherwise it throws the weirdest error
  if (!isOpen.state) return null;
  if (isOpen.id !== id) return null;

  const handleCloseClick = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    setIsOpen({
      id: isOpen.id,
      state: false,
    });
  };

  const modalContent = (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      className="modal-outline absolute top-0 left-0 right-0 bottom-0 z-30"
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="close-modal"
        onClick={handleCloseClick}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleCloseClick(event);
          }
        }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-40 z-40"
      />
      <div className="relative min-h-56 min-w-[440px] z-50" data-testid="modal">
        {showLoader && <Loader />}
        <FlexWrapper
          flexDirection="col"
          className="modal h-full w-full rounded-sm bg-main-0"
        >
          <FlexWrapper
            alignItems="center"
            className="modal-header w-full py-[25px]"
          >
            {title && (
              <Typography
                component={Type.H4}
                className="w-full text-center font-medium font-ubuntu"
              >
                {title}
              </Typography>
            )}
          </FlexWrapper>
          <FlexWrapper className="body p-[30px] pt-0">{children}</FlexWrapper>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );

  return createPortal(
    modalContent,
    document.querySelector('#modal-root') as Element
  );
}

export default Modal;
