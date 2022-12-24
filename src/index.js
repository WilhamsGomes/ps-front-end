import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/index';

import { UserProvider } from './components/Context/useContext';
import { ThemeProvider } from './components/Theme/useThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
     <UserProvider>
      <App />
    </UserProvider> 
  </ThemeProvider>
);
