import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import { EquipmentProvider } from './Context/EquipmentContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <EquipmentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EquipmentProvider>
    </UserProvider>
  </React.StrictMode>
);

