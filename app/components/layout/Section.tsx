import React from 'react';
import { SectionProps } from '@/types';
import Container from './Container';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  variant = 'default',
  fullHeight = false,
  centered = false
}) => {
  const variantClasses = {
    default: 'bg-background text-foreground',
    dark: 'bg-neutral-950 text-white',
    accent: 'bg-gradient-to-br from-green-50 to-green-100 text-neutral-900'
  };

  const baseClasses = 'py-16 md:py-24';
  const heightClasses = fullHeight ? 'min-h-screen flex items-center' : '';
  const centerClasses = centered ? 'text-center' : '';
  
  const combinedClasses = `${baseClasses} ${heightClasses} ${centerClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <section id={id} className={combinedClasses}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;
