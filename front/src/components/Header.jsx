import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import logo from '../assets/blogLogo.png';
import Profile from '../pages/Profile.jsx';

export const Header = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="blog logo" />
        </Link>
        <ul className="nav-menu">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          {isLoggedIn ? (
            <>
              <Profile user={user} />
              <li><Link to="/write-article" className="nav-link">Write</Link></li>
              <li className="logout">
                <button onClick={handleLogout} className="register">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="register"><Link to="/register">Register</Link></li>
              <li className="login"><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
