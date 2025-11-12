import React from 'react';
import { BaseComponent } from '@/types';

interface ContainerProps extends BaseComponent {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  centered = true
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const baseClasses = 'w-full px-4 sm:px-6 lg:px-8';
  const centerClasses = centered ? 'mx-auto' : '';
  const combinedClasses = `${baseClasses} ${centerClasses} ${sizeClasses[size]} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Container;
