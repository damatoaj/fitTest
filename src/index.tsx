import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import { EquipmentProvider } from './Context/EquipmentContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <EquipmentProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </EquipmentProvider>
    </UserProvider>
  </React.StrictMode>
);

