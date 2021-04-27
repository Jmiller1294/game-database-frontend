import React from 'react';
import '../styles/NavBar.css'
import styled from 'styled-components';

export const Row = styled.div`
   display: flex;
   background-color: #050505;
   height: 42px;
`;

export const NavItem = styled.li`
    
`

const NavBar = () => {
    return (
       <Row>
           <li className="site-name"><a href="/">Game Database</a></li>
           <li className="nav-item"></li>
           <li className="nav-item"><a href="/games">Games</a></li>
           <li className="nav-item"><a href="/consoles">Consoles</a></li>
           <li className="nav-item about-button"><a href="/about">About</a></li>
           <li className="nav-item login-button"><a href="/login">Login</a></li>
       </Row>
    )
}
export default NavBar;