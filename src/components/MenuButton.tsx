import type { FC } from 'react';
import { useEffect } from 'react';

type MenuButtonProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const MenuButton: FC<MenuButtonProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className="z-50">{children}</div>
          <div
            className="z-40 h-screen w-screen bg-black bg-opacity-50"
            onClick={onClose}
          />
        </>
      )}
    </>
  );
};

export default MenuButton;
