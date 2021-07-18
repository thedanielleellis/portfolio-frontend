import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="topnav">
      <div id="logo">
        <img src="https://i.imgur.com/QORDWBb.png" alt="Logo" width="170" height="170" />  
      </div>
      <div className="nav-right">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about" exact>About</NavLink>
        <NavLink to="/portfolio" exact>Projects</NavLink>
        <NavLink to="/blog" exact>Blog</NavLink>
      </div>
    </div>
  )
}

export default NavBar;