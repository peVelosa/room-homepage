import { useState } from 'react';
import MenuButton from './MenuButton';
import { X, MenuIcon } from 'lucide-react';
import Logo from './Logo';
import useScroll from '../hooks/useScroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenScroll } = useScroll();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <header className="fixed left-0 right-0 z-50 text-white">
        <nav>
          <div
            className={`px-6 py-12 ${
              screenScroll > 10 ? 'bg-black' : 'bg-transparent'
            }`}
          >
            <div className="relative isolate flex items-center gap-12">
              <button
                className="absolute top-1/2 -translate-y-1/2 md:hidden"
                onClick={onOpen}
              >
                <MenuIcon size={32} />
              </button>
              <div className="mx-auto md:mx-0">
                <Logo />
              </div>
              <ul className="hidden gap-4 md:flex">
                <li>
                  <a
                    href="#"
                    className="relative bg-transparent p-2 before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative bg-transparent p-2 before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                  >
                    shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative bg-transparent p-2 before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative bg-transparent p-2 before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <MenuButton
            isOpen={isOpen}
            onClose={onClose}
          >
            <div className="fixed top-0 flex h-[110px] w-full place-items-center justify-between bg-white px-6">
              <button onClick={onClose}>
                <X
                  className="text-zinc-300"
                  size={32}
                />
              </button>
              <ul className="flex gap-4 font-bold text-black sm:gap-8 sm:text-lg md:hidden">
                <li>
                  <a
                    className="relative bg-transparent before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                    href="#"
                    onClick={onClose}
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    className="relative bg-transparent before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                    href="#"
                    onClick={onClose}
                  >
                    shop
                  </a>
                </li>
                <li>
                  <a
                    className="relative bg-transparent before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                    href="#"
                    onClick={onClose}
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    className="relative bg-transparent before:absolute before:bottom-0 before:left-[30%] before:right-[30%] before:h-[2px] before:content-[''] hover:before:bg-white"
                    href="#"
                    onClick={onClose}
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </MenuButton>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
