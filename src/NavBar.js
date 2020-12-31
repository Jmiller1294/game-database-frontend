import React from 'react';
import './NavBar.css'


const NavBar = () => {
    return (
       <ul id="navbar">
           <li><a href="/">Home</a></li>
           <li><a href="registration">Registration</a></li>
           <li><a href="login">Login</a></li>
           <li><a href="about">About</a></li>
       </ul>
    )
}
export default NavBar;