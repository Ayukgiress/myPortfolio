import { NavigationConfig } from '../types/navigation';

export const navigationConfig: NavigationConfig = {
  brand: {
    name: 'Ayuk Giress',
    href: '#home'
  },
  items: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]
};
