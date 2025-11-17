import React from 'react';
import { NavigationItem } from '@/app/types';

interface NavigationLinkProps extends NavigationItem {
  isActive?: boolean;
  onClick?: (item: NavigationItem) => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  id,
  label,
  href,
  external = false,
  isActive = false,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick({ id, label, href, external });
    }
  };

  const baseClasses = 'relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md';
  const activeClasses = isActive 
    ? 'text-green-400 bg-green-400/10' 
    : 'text-white hover:text-green-400 hover:bg-white/5';

  const linkProps = {
    href,
    className: `${baseClasses} ${activeClasses}`,
    onClick: handleClick,
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  };

  return (
    <a {...linkProps}>
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full" />
      )}
    </a>
  );
};

export default NavigationLink;
