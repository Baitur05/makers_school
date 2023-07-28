import { createContext, useContext, useState } from 'react';

const ContextDesktop = createContext();

export function DesktopContext({ children }) {
  const [showDesktopOne, setShowDesktopOne] = useState(true);
  const [showDesktopTwo, setShowDesktopTwo] = useState(true);

  return (
    <ContextDesktop.Provider value={{ showDesktopOne, setShowDesktopOne, showDesktopTwo, setShowDesktopTwo }}>
      {children}
    </ContextDesktop.Provider>
  );
}

export function useDesktopContext() {
  return useContext(ContextDesktop);
}
