import React from 'react';

interface BrandProps {
  name: string;
  href?: string;
  className?: string;
}

const Brand: React.FC<BrandProps> = ({ 
  name, 
  href = '#', 
  className = '' 
}) => {
  const baseClasses = 'text-2xl font-bold text-green-600 animate-fade-in';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {name}
      </a>
    );
  }

  return (
    <div className={combinedClasses}>
      {name}
    </div>
  );
};

export default Brand;
