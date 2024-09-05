'use client';

import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}

const useScroll = () => {
  const { scrollY } = useContext(ScrollContext);
  return scrollY;
};

export { useScroll };

export default ScrollProvider;
