import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
`;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding; 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`



const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Home</h1>
                </NavLink>

                    <NavLink to="/login" activeStyle>
                        Login 
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                <NavBtn>
                    <NavBtnLink to="/registration">Signup</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}
export default NavBar;