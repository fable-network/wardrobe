import { useState, useEffect } from 'react';
import _throttle from '../utils/throttle';
import supportsPassive from '../utils/supportsPassiveEvents';

function getWindowSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };
}

const DEFAULT_OPTIONS = {
  throttle: 500,
};

const useWindowSize = (options = {}) => {
  const { throttle } = { ...DEFAULT_OPTIONS, ...options };
  const [size, setSize] = useState(getWindowSize());

  useEffect(
    () => {
      const handleResize = _throttle(() => {
        const windowSize = getWindowSize();
        if (
          size.innerWidth !== windowSize.innerWidth ||
          size.innerHeight !== windowSize.innerHeight
        ) {
          setSize(windowSize);
        }
      }, throttle);

      window.addEventListener('resize', handleResize, supportsPassive ? { passive: true } : false);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [throttle]
  );

  return size;
};

export default useWindowSize;
