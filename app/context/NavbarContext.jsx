'use client';

import { createContext, useCallback, useContext, useState } from 'react';

const NavbarContext = createContext();

function NavbarProvider({ children }) {
  const [isOpenedNavbar, setIsOpenedNavbar] = useState(false);

  return (
    <NavbarContext.Provider value={{ isOpenedNavbar, setIsOpenedNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

const useNavbar = () => {
  const { isOpenedNavbar, setIsOpenedNavbar } = useContext(NavbarContext);

  const toggleNavbar = useCallback(() => {
    setIsOpenedNavbar((prev) => !prev);
  }, [setIsOpenedNavbar]);

  return { isOpenedNavbar, toggleNavbar };
};

export { useNavbar };
export default NavbarProvider;
