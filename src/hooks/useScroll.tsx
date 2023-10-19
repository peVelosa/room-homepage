import { useEffect, useState } from 'react';

const useScroll = () => {
  const [screenScroll, setScreenScroll] = useState<number>(0);

  function scroll() {
    setScreenScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return { screenScroll };
};

export default useScroll;
