import React from 'react';
import { BaseComponent } from '@/types';

interface CardProps extends BaseComponent {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white dark:bg-neutral-800',
    elevated: 'bg-white dark:bg-neutral-800 shadow-lg',
    bordered: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
