"use client";

import React from 'react';
import { NavigationItem } from '@/app/types';

interface NavigationLinkProps extends NavigationItem {
  className?: string;
  onClick?: (item: NavigationItem) => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  id,
  label,
  href,
  external = false,
  className = '',
  onClick
}) => {
  // Check if this link is active (for styling purposes)
  const isActive = typeof window !== 'undefined' && window.location.hash === href;
  const baseClasses = `hover:text-green-500 transition-colors duration-300 ${isActive ? 'text-green-500 font-semibold' : 'text-white'}`;
  const combinedClasses = `${baseClasses} ${className}`.trim();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick({ id, label, href, external });
    }
  };

  const linkProps = {
    href,
    className: combinedClasses,
    onClick: handleClick,
    ...(external && { 
      target: '_blank', 
      rel: 'noopener noreferrer' 
    })
  };

  return <a {...linkProps}>{label}</a>;
};

export default NavigationLink;
