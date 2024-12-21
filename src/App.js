// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import Cart from './pages/Cart';

const App = () => {
  // Initialize cart state
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {/* Pass cart to Navbar */}
      <Navbar cart={cart} />

      <Routes>
        {/* Pass cart and setCart to Home and Cart */}
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
