import ReactDOM from 'react-dom/client';

import { setupTelegramMock } from '@shared/mocks';

import './index.scss';

import App from './app';

if (import.meta.env.MODE === 'development') {
  setupTelegramMock();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
