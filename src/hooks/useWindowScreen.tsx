import { useEffect, useState } from 'react';

const useWindowScreen = () => {
  const [screenSize, setScreenSize] = useState<number | null>(null);

  function resize(e: UIEvent) {
    const { innerWidth } = e.target as Window;
    setScreenSize(innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    setScreenSize(window.innerWidth);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return { screenSize };
};

export default useWindowScreen;
