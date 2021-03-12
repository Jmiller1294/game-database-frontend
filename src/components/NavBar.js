import React from 'react';
import '../styles/NavBar.css'


const NavBar = () => {
    return (
       <ul id="navbar">
           <li className="site-name"><a href="/">Game Database</a></li>
           <li className="nav-item"></li>
           <li className="nav-item"><a href="/games">Games</a></li>
           <li className="nav-item"><a href="/consoles">Consoles</a></li>
           <li className="nav-item about-button"><a href="/about">About</a></li>
           <li className="nav-item login-button"><a href="/login">Login</a></li>
       </ul>
    )
}
export default NavBar;