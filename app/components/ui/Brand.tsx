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
  const baseClasses = 'w-16 h-16 relative animate-fade-in hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  const videoClasses = 'w-full h-full object-cover rounded-full pointer-events-none border-2 border-green-600 hover:border-green-400';

  const content = (
    <video
      src="/logo/y.mp4"
      autoPlay
      loop
      muted
      playsInline
      title="Brand Logo"
      className={videoClasses}
    />
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <div className={combinedClasses}>
      {content}
    </div>
  );
};

export default Brand;
