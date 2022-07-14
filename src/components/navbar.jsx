import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/details">Details Page</Link>
    </div>
  );
}
export default Navbar;
