import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="nav-item" id="main-nav" to="/">CLOTHESLINE</NavLink>
      <NavLink className="nav-item" to="/cart">MY CART</NavLink>
      <NavLink className="nav-item" to="/new">ADD TO THE LINE</NavLink>
      <NavLink className="nav-item" to="/all-clothes">SEE ALL CLOTHES</NavLink>
    </div>
  );
};

export default NavBar;