"use client";

import { useState, useCallback } from 'react';
import { NavigationItem } from '../types/navigation';

interface UseNavigationReturn {
  activeItem: string | null;
  handleItemClick: (item: NavigationItem) => void;
  setActiveItem: (itemId: string | null) => void;
}

export const useNavigation = (): UseNavigationReturn => {
  const [activeItem, setActiveItem] = useState<string | null>('home');

  const handleItemClick = useCallback((item: NavigationItem) => {
    setActiveItem(item.id);
    
    if (item.href) {
      if (item.href.startsWith('#')) {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else if (item.href.startsWith('http')) {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else {
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