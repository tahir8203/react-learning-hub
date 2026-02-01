import React from 'react';
import Navbar from './Navbar';

export function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2026 React Learning Hub. Learn React fundamentals step-by-step.</p>
      </footer>
    </div>
  );
}

export default Layout;
