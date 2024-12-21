import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
  // Check if cart is an array and calculate the total number of items in the cart
  const totalItems = Array.isArray(cart) ? cart.reduce((acc, item) => acc + (item.quantity || 0), 0) : 0;

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
          {totalItems > 0 && (
            <span className="cart-item-count">{totalItems}</span>
          )}
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
          {totalItems > 0 && (
            <span className="cart-item-count">{totalItems}</span>
          )}
        </Link>
      </div>
    </>
  );
};

export default Navbar;
