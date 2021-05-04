import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>CLOTHESLINE</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/cart">MY CART ({props.cartItems})</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/sell">SELL AN ITEM</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/closet">MY CLOSET</NavLink>
      <p className="funds">Funds: ${props.funds} </p>
    </div>
  );
};

export default NavBar;