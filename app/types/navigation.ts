export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationConfig {
  brand: {
    name: string;
    href?: string;
  };
  items: NavigationItem[];
}
