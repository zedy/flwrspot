// libs
import { useContext } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';
import Button from '@/components/elements/Button';
import { ModalContext } from '@/context/ModalContext';

type ModalProperties = {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
};

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
      classes="modal-outline absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-40 z-50"
    >
      <div
        className="relative min-h-56 min-w-[300px] max-w-[440px]"
        data-testid="modal"
      >
        <FlexWrapper
          flexDirection="col"
          classes="modal h-full w-full rounded-md bg-neutral-100"
        >
          <FlexWrapper
            alignItems="center"
            classes="modal-header w-full py-[30px]"
          >
            {title && (
              <Typography
                component={Type.H4}
                classes="w-full text-center font-medium font-ubuntu"
              >
                {title}
              </Typography>
            )}
            <Button
              onClick={handleCloseClick}
              className="absolute right-6 top-[30px] rotate-45 bg-transparent hover:animate-pulse"
            >
              X
            </Button>
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
