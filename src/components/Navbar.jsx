// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add styles here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyApp</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/user-login">User Login</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
        <li><Link to="/cart">Add to Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
