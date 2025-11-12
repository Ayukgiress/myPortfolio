import React from 'react';
import { NavigationItem } from '@/types';
import NavigationLink from './NavigationLink';

interface MobileMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onItemClick?: (item: NavigationItem) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onClose,
  activeItem,
  onItemClick
}) => {
  const handleItemClick = (item: NavigationItem) => {
    onItemClick?.(item);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 z-50 h-full w-64 bg-neutral-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <NavigationLink
                  {...item}
                  isActive={activeItem === item.id}
                  onClick={handleItemClick}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
