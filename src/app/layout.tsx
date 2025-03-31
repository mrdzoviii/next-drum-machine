import React from 'react';

import Header from '../components/Header';

import './styles.css';
import PreferencesProvider from "src/context/PreferencesProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreferencesProvider>
            <Header />
            {children}
        </PreferencesProvider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
