import { useState, useEffect } from 'react';
import throttle from '../utils/throttle';
import supportsPassive from '../utils/supportsPassiveEvents';

const getPageOffset = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

const DEFAULT_OPTIONS = {
  delay: 500,
  on: true,
};

const useWindowScroll = (options = {}) => {
  const { delay, on } = { ...DEFAULT_OPTIONS, ...options };
  const [pageOffset, setPageOffset] = useState(getPageOffset());

  useEffect(
    () => {
      const handleScroll = throttle(() => {
        if (!on) return;
        setPageOffset(getPageOffset());
      }, delay);

      if (on) {
        window.addEventListener(
          'scroll',
          handleScroll,
          supportsPassive ? { passive: true } : false
        );
      }
      return () => {
        if (on) {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    },
    [on, delay]
  );

  return pageOffset;
};

export default useWindowScroll;
