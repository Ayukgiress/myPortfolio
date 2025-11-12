import React from 'react';
import { NavigationItem } from '@/types/navigation';
import NavigationLink from './NavigationLink';

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: (item: NavigationItem) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  className = '',
  onItemClick
}) => {
  const baseClasses = 'flex gap-8 text-lg items-center';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <ul className={combinedClasses} aria-label="Main navigation">
      {items.map((item) => (
        <li key={item.id}>
          <NavigationLink
            {...item}
            onClick={onItemClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
