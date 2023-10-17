import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderTop.css';

function HeaderTop() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <p>Call us: +254713831177</p>
      </div>
      <div className="topbar-right">
      <Link to="/login" className='btnHome'>Staff Login</Link>
      </div>
    </div>
  );
}

export default HeaderTop;
