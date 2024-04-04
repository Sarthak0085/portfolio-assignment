import { useEffect, useRef, useState } from 'react';

const useDebouncedScroll = (delay = 100) => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setScrollY(window.scrollY);
      }, delay);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return scrollY;
};

export default useDebouncedScroll;
