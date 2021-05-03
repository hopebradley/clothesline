import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">ClothesLine</NavLink>
      <NavLink to="/cart">My Cart</NavLink>
      <NavLink to="/new">Add To The Line</NavLink>
      <NavLink to="/all-clothes">See All Clothes</NavLink>
    </div>
  );
};

export default NavBar;