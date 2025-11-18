"use client";

import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

function I18nProviderContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // i18n is initialized by the import above
  }, []);

  return (
    <Suspense fallback={<div>{children}</div>}>
      <I18nextProvider i18n={i18n}>
        <I18nProviderContent>{children}</I18nProviderContent>
      </I18nextProvider>
    </Suspense>
  );
}
