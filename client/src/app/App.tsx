// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { RouterProvider } from './router/router';
import store from './store/store';

import { CookieConsentModal, type CookiePreferences } from '../entities/recorder/ui/CookieConsentModal';
import { YandexMetrika } from '@/features/Yandex/Yandex.Metrika';

function App(): React.JSX.Element {
  const [prefs, setPrefs] = React.useState<CookiePreferences>(() => {
    // читаем из localStorage или берём дефолт
    const saved = localStorage.getItem('cookiePrefs');
    return saved
      ? JSON.parse(saved)
      : { essential: true, analytics: false, marketing: false };
  });
  const [modalOpen, setModalOpen] = React.useState(
    () => !localStorage.getItem('cookiePrefs')
  );

  const handleSave = (newPrefs: CookiePreferences) => {
    localStorage.setItem('cookiePrefs', JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    setModalOpen(false);
  };

  const handleRejectAll = () => {
    const rejectPrefs: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookiePrefs', JSON.stringify(rejectPrefs));
    setPrefs(rejectPrefs);
    setModalOpen(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterProvider />
        <CookieConsentModal
          open={modalOpen}
          onSave={handleSave}
          onRejectAll={handleRejectAll}
        />
        <YandexMetrika consentGiven={prefs.analytics} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
