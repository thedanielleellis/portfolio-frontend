import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="topnav">
      <a className="logo" href="/">Danielle Ellis</a>
      <div className="justify-content-end" id="navbarDefault"/>
      <NavLink className="active" to="/" exact>Home</NavLink>
      <NavLink to="/about" exact>About</NavLink>
      <NavLink to="/portfolio" exact>Portfolio</NavLink>
      <NavLink to="/blog" exact>Blog</NavLink>
    </div>
  )
}




/* const NavBar = () => {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/">Danielle Ellis</a>

        <div className="justify-content-end" id="navbarDefault" >
          
        <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Home</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/about"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/projects"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Portfolio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/blog"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} */

export default NavBar;