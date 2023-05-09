import React from 'react';

function Navbar(props) {
  const handleNavClick = (page) => {
    props.onNavClick(page);
  };

  return (
    <nav className="navbar">
      <span
        className="navbar-brand-link"
        onClick={() => handleNavClick('home')}
      >
        Stay-at-Home Dad
      </span>
      <div className="navbar-links">
        <span className="navbar-link" onClick={() => handleNavClick('home')}>
          Home
        </span>
        <span className="navbar-link" onClick={() => handleNavClick('about')}>
          About
        </span>
        <span className="navbar-link" onClick={() => handleNavClick('contact')}>
          Contact
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
