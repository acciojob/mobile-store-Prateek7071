import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f5f5f5' }}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/admin">ADMIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;