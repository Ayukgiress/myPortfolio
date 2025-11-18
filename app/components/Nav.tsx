"use client";

import React, { useState } from 'react';
import { navigationConfig } from '../config/navigation';
import { useNavigation } from '../hooks/useNavigation';
import NavigationContainer from './navigation/NavigationContainer';
import Brand from './ui/Brand';
import NavigationMenu from './ui/NavigationMenu';
import MobileMenu from './navigation/MobileMenu';
import { ThemeToggle } from './ui/ThemeToggle';
import { LanguageSwitcher } from './ui/LanguageSwitcher';

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className = '' }) => {
  const { handleItemClick } = useNavigation();
  const { brand, items } = navigationConfig;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerClasses = `fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full justify-center bg-white dark:bg-black px-6 py-3 shadow-md transition-all duration-300 ease-in-out ${className}`.trim();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu
                items={items}
                onItemClick={handleItemClick}
              />
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </NavigationContainer>

      {/* Mobile Menu */}
      <MobileMenu
        items={items}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onItemClick={handleItemClick}
      />
    </header>
  );
};

export default Nav;
