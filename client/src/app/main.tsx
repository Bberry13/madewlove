import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <>
    {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <App />
  </>
);
