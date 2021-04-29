import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
   width: 100%;
   display: flex;
   background-color: #050505;
   height: 42px;
`

const Col = styled.div`
    flex: ${ (props) => props.size};
    height: 100%;
`

const Logo = styled.a`
    float: left;
    font: 20px Fantasy;
    text-decoration: none;
    padding: 10px;
    padding-left: 20px;
    &:visited,&:link {
        color: #fff;
    }
    &:hover {
        color: blue;
    }
`

const Nav = styled.ul`
    display: inline;
    list-style: none;
    float: right;
    margin: 0;
    padding: 13px;
    padding-right: 25px;
`

const NavItem = styled.li`
    padding-left: 15px;
    display: inline;
    color: #fff;
`

const Link = styled.a`
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
            <Col size={1}>
                <Logo href="/">Game Database</Logo>
                <Nav>
                    <NavItem className="nav-item"></NavItem>
                    <NavItem className="nav-item"><Link href="/games">Games</Link></NavItem>
                    <NavItem className="nav-item"><Link href="/consoles">Consoles</Link></NavItem>
                    <NavItem className="nav-item about-button"><Link href="/about">About</Link></NavItem>
                    <NavItem className="nav-item login-button"><Link href="/login">Login</Link></NavItem>
                </Nav>
            </Col>
        </Row>
    )
}
export default NavBar;