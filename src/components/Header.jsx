import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Atharv Krushi</div>
      <nav className="navbar-links">
        <Link to="/">.   Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Order</Link>
        <Link to="/about">About</Link> {/* ✅ Added About Page */}
        <Link to="/contact">Contact</Link>
        
      </nav>
    </header>
  );
};

export default Navbar;
