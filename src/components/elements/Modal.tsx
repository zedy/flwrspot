// libs
import { useContext } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';
import { ModalContext } from '@/context/ModalContext';

type ModalProperties = {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
};

/**
 * The main component for displaying modals accross the app.
 * It takes a child which is the modal content (the content displayed
 * within the modal itself). All other logic is in the ModalContext
 *
 * @param ModalProperties
 * @returns JSX
 */
function Modal({ children, title, isOpen }: ModalProperties) {
  const { setIsOpen } = useContext(ModalContext);
  if (!isOpen) return <div />;

  const handleCloseClick = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const modalContent = (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      classes="modal-outline absolute top-0 left-0 right-0 bottom-0 z-30"
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
      <div
        className="relative min-h-56 min-w-[300px] max-w-[440px] z-50"
        data-testid="modal"
      >
        <FlexWrapper
          flexDirection="col"
          classes="modal h-full w-full rounded-sm bg-main-0"
        >
          <FlexWrapper
            alignItems="center"
            classes="modal-header w-full py-[25px]"
          >
            {title && (
              <Typography
                component={Type.H4}
                classes="w-full text-center font-medium font-ubuntu"
              >
                {title}
              </Typography>
            )}
          </FlexWrapper>
          <FlexWrapper classes="body p-[30px] pt-0">{children}</FlexWrapper>
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
