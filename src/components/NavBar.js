import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
   display: flex;
   background-color: #050505;
   height: 42px;
`;

export const Logo = styled.a`
    float: left;
    font: 20px Fantasy;
    text-decoration: none;
    padding: 10px;
    &:visited,&:link {
        color: #fff;
    }
    &:hover {
        color: blue;
    }
`

export const Nav = styled.ul`
    display: inline;
    list-style: none;
    float: right;
    margin: 0;
    padding: 13px;
`

export const NavItem = styled.li`
    padding-left: 15px;
    display: inline;
    color: #fff;
`
export const Link = styled.a`
    text-decoration: none;
     &:visited,&:link {
        color: #fff;
    }
    &:hover {
        color: blue;
    }
`

const NavBar = () => {
    return (
        <Row>
            <Logo href="/">Game Database</Logo>
            <Nav>
                <NavItem className="nav-item"></NavItem>
                <NavItem className="nav-item"><Link href="/games">Games</Link></NavItem>
                <NavItem className="nav-item"><Link href="/consoles">Consoles</Link></NavItem>
                <NavItem className="nav-item about-button"><Link href="/about">About</Link></NavItem>
                <NavItem className="nav-item login-button"><Link href="/login">Login</Link></NavItem>
            </Nav>
        </Row>
    )
}
export default NavBar;