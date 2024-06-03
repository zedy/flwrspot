import { useState, useEffect } from 'react';

/**
 * Simple custom hook that checks the window size and returns a
 * bool against a query.
 *
 * @returns {boolean}
 */
const useMediaQuery = (breakpoint: string) => {
  const [windowSize, setWindowSize] = useState<number>(0);

  function getCurrentBreakpoint() {
    if (windowSize < 768) {
      return 'sm';
    }
    if (windowSize >= 768 && windowSize < 1220) {
      return 'md';
    }
    return 'lg';
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentBreakpoint = getCurrentBreakpoint();

  return breakpoint === currentBreakpoint;
};

export default useMediaQuery;
