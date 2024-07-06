import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/tasks/:id" className="nav-links">Tasks</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;