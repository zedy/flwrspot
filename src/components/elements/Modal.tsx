// libs
import { useContext } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';
import { ModalContext } from '@/context/ModalContext';
import Loader from '@/components/Loader';
import Button from '@/components/elements/Button';

// assets
import closeIcon from '@/assets/pl-icon-close.svg';

type ModalProperties = {
  children: React.ReactNode;
  title?: string;
  id: string;
  isOpen: any;
  type?: 'default' | 'wide';
};

/**
 * The main component for displaying modals accross the app.
 * It takes a child which is the modal content (the content displayed
 * within the modal itself). All other logic is in the ModalContext
 *
 * @param ModalProperties
 * @returns JSX
 */
function Modal({
  children,
  title,
  id,
  isOpen,
  type = 'default',
}: ModalProperties) {
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
      <div
        className={`relative w-full md:w-auto min-w-0 min-h-56 z-50 px-[10%] md:p-0 ${
          type === 'default' ? 'md:min-w-[440px]' : 'md:min-w-[590px]'
        }`}
        data-testid="modal"
      >
        {showLoader && <Loader />}
        <FlexWrapper
          flexDirection="col"
          className="modal h-full w-full rounded-sm bg-main-0"
        >
          {type === 'wide' && (
            <Button
              onClick={handleCloseClick}
              version="icon-only"
              className="w-5 h-5 absolute top-4 right-4 !p-0"
            >
              <img src={closeIcon} alt="close" />
            </Button>
          )}
          {title && (
            <FlexWrapper
              alignItems="center"
              className="modal-header w-full py-[25px]"
            >
              <Typography
                component={Type.H4}
                className="w-full text-center font-medium font-ubuntu"
              >
                {title}
              </Typography>
            </FlexWrapper>
          )}
          <FlexWrapper
            className={`body ${
              type === 'default' ? 'pt-0 p-[30px]' : 'px-[110px] py-[60px]'
            }`}
          >
            {children}
          </FlexWrapper>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );

  return createPortal(
    modalContent,
    document.querySelector('#modal-root') as Element,
    title
  );
}

export default Modal;
