import React from 'react';
import '../styles/NavBar.css'


const NavBar = () => {
    return (
       <ul id="navbar">
           <li><a href="/">Home</a></li>
           <li><a href="/games">Games</a></li>
           <li><a href="/consoles">Consoles</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/login">Login</a></li>
       </ul>
    )
}
export default NavBar;