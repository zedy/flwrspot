import React, { useState } from 'react';

type State = {
  id: string;
  state: boolean;
};

type ContextProperties = {
  isOpen: State;
  setIsOpen: React.Dispatch<React.SetStateAction<State>>;
  showLoader: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext = {} as ContextProperties;

const INITIAL_STATE = {
  isOpen: {
    id: '',
    state: false,
  },
  showLoader: false,
};

export const ModalContext = React.createContext(initialContext);

export function ModalContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<State>(INITIAL_STATE.isOpen);
  const [showLoader, setShowLoader] = useState<boolean>(
    INITIAL_STATE.showLoader
  );

  const provide = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      showLoader,
      setShowLoader,
    }),
    [isOpen, showLoader]
  );

  return (
    <ModalContext.Provider value={provide}>{children}</ModalContext.Provider>
  );
}
