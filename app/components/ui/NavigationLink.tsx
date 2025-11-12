import React from 'react';
import { NavigationItem } from '@/types/navigation';

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
  const baseClasses = 'hover:text-green-500 transition-colors duration-300';
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
