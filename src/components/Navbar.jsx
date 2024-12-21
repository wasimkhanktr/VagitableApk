import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
  return (
    <>
      {/* Desktop and Laptop Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-item">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/search" className="nav-item">
          <i className="fas fa-search"></i>
        </Link>
        <Link to="/user-login" className="nav-item">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/admin-login" className="nav-item">
          <i className="fas fa-user-shield"></i>
        </Link>
        <Link to="/cart" className="nav-item">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </nav>

      {/* Mobile and Tablet Navbar */}
      <div className="mobile-navbar">
        <Link to="/" className="nav-item">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/search" className="nav-item">
          <i className="fas fa-search"></i>
        </Link>
        <Link to="/user-login" className="nav-item">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/admin-login" className="nav-item">
          <i className="fas fa-user-shield"></i>
        </Link>
        <Link to="/cart" className="nav-item">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
