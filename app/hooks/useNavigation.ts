"use client";

import { useState, useCallback } from 'react';
import { NavigationItem } from '../types/navigation';

interface UseNavigationReturn {
  activeItem: string | null;
  handleItemClick: (item: NavigationItem) => void;
  setActiveItem: (itemId: string | null) => void;
}

export const useNavigation = (): UseNavigationReturn => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = useCallback((item: NavigationItem) => {
    setActiveItem(item.id);
    
    // Handle navigation based on item type
    if (item.href) {
      // For external links or hash links
      // Handle smooth scrolling for hash links
      if (item.href.startsWith('#')) {
        // Smooth scroll to section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else if (item.href.startsWith('http')) {
        // External link
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else {
        // Internal navigation
        window.location.href = item.href;
      }
    }
  }, []);

  return {
    activeItem,
    handleItemClick,
    setActiveItem
  };
};