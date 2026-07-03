import React from 'react';

interface BrandProps {
  name: string;
  href?: string;
  className?: string;
}

const Brand: React.FC<BrandProps> = ({ name, href = '#', className = '' }) => {
  return (
    <a href={href} aria-label={name} className={`flex items-center group ${className}`}>
      <svg
        viewBox="0 0 160 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
      >
        {/* Green accent bar */}
        <rect x="0" y="6" width="3" height="24" rx="1.5" fill="#22c55e" />

        {/* First name */}
        <text
          x="10"
          y="26"
          fill="white"
          fontSize="18"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.3"
        >
          Ayuk
        </text>

        {/* Last name — lighter weight, green tint */}
        <text
          x="58"
          y="26"
          fill="#22c55e"
          fontSize="18"
          fontWeight="300"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.3"
        >
          Giress
        </text>
      </svg>
    </a>
  );
};

export default Brand;
