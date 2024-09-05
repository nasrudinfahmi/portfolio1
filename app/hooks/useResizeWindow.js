'use client';

import { useCallback, useEffect, useState } from 'react';

function useResizeWindow() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  const onResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
    }
  }, [onResize]);

  return windowWidth;
}

export default useResizeWindow;
