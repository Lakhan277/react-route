import React from 'react';
import {NavLink} from 'react-router-dom';
 
function Header(){

   
    return(
        
        <nav>
           <NavLink to="/" className="logo-link">
        <img src="/img/logo.jpeg" alt="Logo" className="logo" />

      </NavLink>
          <NavLink  to='/'> Home</NavLink>  
          <NavLink  to='/about'>About</NavLink>
          <NavLink  to='/UserInfo'>UserInfo</NavLink>
        </nav>
    )
}
export default Header;