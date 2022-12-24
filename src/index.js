import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/index';

import { UserProvider } from './components/Context/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider> 
);
