"use client";

import dynamic from 'next/dynamic';
import type { ComponentType, ReactNode } from 'react';

// Lazy-load the I18nextProvider on the client only. This prevents the
// server-side pre-render (including the built-in /404 and /500 error
// pages) from evaluating the i18next module, which can throw
// "r(...) is not a constructor" during static export in some bundling
// configurations.
const ClientI18nProvider = dynamic(
  () =>
    import('./I18nProviderClient').then(
      (mod) => mod.I18nProviderClient
    ),
  { ssr: false }
) as ComponentType<{ children: ReactNode }>;

export function I18nProvider({ children }: { children: ReactNode }) {
  return <ClientI18nProvider>{children}</ClientI18nProvider>;
}
