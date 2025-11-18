import React from 'react';
// import { NavigationItem } from '@/types/navigation';
import { NavigationItem } from '@/app/types';
import NavigationLink from './NavigationLink';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

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
          {item.id === 'theme' ? (
            <ThemeToggle />
          ) : item.id === 'language' ? (
            <LanguageSwitcher />
          ) : (
            <NavigationLink
              {...item}
              onClick={onItemClick}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
