import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 React Learning Hub
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/intro" className="nav-link">Intro</Link>
          </li>
          <li className="nav-item">
            <Link to="/advanced" className="nav-link">Advanced JS</Link>
          </li>
          <li className="nav-item">
            <Link to="/function-components" className="nav-link">Functions</Link>
          </li>
          <li className="nav-item">
            <Link to="/rendering" className="nav-link">Rendering</Link>
          </li>
          <li className="nav-item">
            <Link to="/state-props" className="nav-link">State & Props</Link>
          </li>
          <li className="nav-item">
            <Link to="/event-handling" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/conditional" className="nav-link">Conditional</Link>
          </li>
          <li className="nav-item">
            <Link to="/lists-keys" className="nav-link">Lists</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
