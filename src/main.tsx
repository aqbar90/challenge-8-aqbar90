import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </HelmetProvider>
);
