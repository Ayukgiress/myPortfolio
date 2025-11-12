import React from 'react';

interface NavigationContainerProps {
  children: React.ReactNode;
  className?: string;
}

const NavigationContainer: React.FC<NavigationContainerProps> = ({
  children,
  className = ''
}) => {
  const baseClasses = 'bg-black/90 text-white border border-[#1f1f1f] shadow-[0_8px_20px_rgba(0,0,0,0.8)] rounded-full backdrop-blur-sm';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      <nav className="max-w-6xl mx-auto px-5 py-4">
        {children}
      </nav>
    </div>
  );
};

export default NavigationContainer;
