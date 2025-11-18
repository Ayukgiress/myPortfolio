"use client";

import React from 'react';
import { navigationConfig } from '../config/navigation';
import { useNavigation } from '../hooks/useNavigation';
import NavigationContainer from './navigation/NavigationContainer';
import Brand from './ui/Brand';
import NavigationMenu from './ui/NavigationMenu';
import { ThemeToggle } from './ui/ThemeToggle';
import { LanguageSwitcher } from './ui/LanguageSwitcher';

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className = '' }) => {
  const { handleItemClick } = useNavigation();
  const { brand, items } = navigationConfig;

  const headerClasses = `fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full px-5 pt-5 ${className}`.trim();

  return (
    <header className={headerClasses}>
      <NavigationContainer>
        <div className="flex items-center justify-between">
          <Brand
            name={brand.name}
            href={brand.href}
          />
          <div className="flex-1" aria-label="branding-spacer" />
          <div className="flex items-center gap-4">
            <NavigationMenu
              items={items}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </NavigationContainer>
    </header>
  );
};

export default Nav;
