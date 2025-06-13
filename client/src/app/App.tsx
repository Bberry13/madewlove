import React from 'react';
import { RouterProvider } from './router/router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import store from './store/store';
import CookieConsentModal from '../entities/recorder/ui/CookieConsentModal';

function App(): React.JSX.Element {
  const [cookieOpen, setCookieOpen] = React.useState(
    () => !localStorage.getItem('cookieAccepted')
  );

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setCookieOpen(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterProvider />
        <CookieConsentModal open={cookieOpen} onAccept={handleAccept} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
