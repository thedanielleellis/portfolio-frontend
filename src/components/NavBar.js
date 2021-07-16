import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="topnav">
      <a className="logo" href="/">Danielle Ellis</a>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about" exact>About</NavLink>
      <NavLink to="/portfolio" exact>Portfolio</NavLink>
      <NavLink to="/blog" exact>Blog</NavLink>
    </div>
  )
}

export default NavBar;