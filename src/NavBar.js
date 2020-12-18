import React from 'react';
import styled from 'styled-components';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from 'react-router-dom';

const Title = styled.h1`
    color: blue;
    font-size: 25px;
`;

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Home</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/registration">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}
export default NavBar;