// Core UI Types
export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

// Content Types
export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

// Layout Types
export interface SectionProps extends BaseComponent {
  id?: string;
  variant?: 'default' | 'dark' | 'accent';
  fullHeight?: boolean;
  centered?: boolean;
}
