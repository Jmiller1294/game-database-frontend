import React from 'react';
import '../styles/NavBar.css'


const NavBar = () => {
    return (
       <ul id="navbar">
           <li className="site-name">Game Database</li>
           <li className="nav-item"><a href="/">Home</a></li>
           <li className="nav-item"><a href="/games">Games</a></li>
           <li className="nav-item"><a href="/consoles">Consoles</a></li>
           <li className="nav-item"><a href="/about">About</a></li>
           <li className="nav-item login-button"><a href="/login">Login</a></li>
       </ul>
    )
}
export default NavBar;