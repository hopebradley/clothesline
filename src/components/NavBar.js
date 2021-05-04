import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <NavLink className="nav-item" id="main-nav" to="/">CLOTHESLINE</NavLink>
      <NavLink className="nav-item" to="/cart">MY CART</NavLink>
      <NavLink className="nav-item" to="/sell">SELL AN ITEM</NavLink>
      <NavLink className="nav-item" to="/closet">MY CLOSET</NavLink>
      <p className="funds">Funds: ${props.funds} </p>
    </div>
  );
};

export default NavBar;