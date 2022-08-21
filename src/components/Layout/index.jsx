import React from 'react';
import { Header, Footer } from '@components';
import './styles.css';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
