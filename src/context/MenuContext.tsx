// libs
import React, { useEffect, useState } from 'react';

// components
import useMediaQuery from '@/hooks/useMediaQuery';

type ContextProperties = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext = {} as ContextProperties;

const INITIAL_STATE = {
  isOpen: false,
};

export const MenuContext = React.createContext(initialContext);

export function MenuContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(INITIAL_STATE.isOpen);
  const isSm = useMediaQuery('sm');

  useEffect(() => {
    if (isOpen && !isSm) {
      setIsOpen(false);
    }
  }, [isSm]);

  const provide = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen]
  );

  return (
    <MenuContext.Provider value={provide}>{children}</MenuContext.Provider>
  );
}
