import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">ShopRouter</Link>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Products</NavLink>
          <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Cart <span className="badge">{cartCount}</span>
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Profile ({user.name})</NavLink>
              <button onClick={logout} className="btn btn-outline" style={{ padding: '2px 8px', fontSize: '0.8rem' }}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="nav-link">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
