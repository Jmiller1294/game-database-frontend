import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
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

class NavBar extends Component {

    handleLogout() {
        this.props.logout()
    }

    render() {
        let NavLink;
        let ProfileLink;
        if(this.props.loggedIn) {
            NavLink = <NavItem onClick={() => this.handleLogout()}><Link href="#">Logout</Link></NavItem>
            ProfileLink = <NavItem><Link href="/profile">Profile</Link></NavItem>
        }
        else {
            NavLink = <NavItem><Link href="/login">Login</Link></NavItem>
            ProfileLink = null;
        }
        
        return (
            <Row>
                <Col size={1}>
                    <Logo href="/">Game Database</Logo>
                    <Nav>
                        <NavItem><Link href="/games">Games</Link></NavItem>
                        <NavItem><Link href="/consoles">Consoles</Link></NavItem>
                        <NavItem><Link href="/about">About</Link></NavItem>
                        {ProfileLink}
                        <NavItem></NavItem>
                        <NavItem></NavItem>
                        <NavItem></NavItem>
                        {NavLink}
                    </Nav>
                </Col>
            </Row>
        )
    }
   
}
const mapStateToProps = (state) => ({
    user: state.user.currentUser,
    loggedIn: state.user.loggedIn
  })

export default connect(mapStateToProps, { logout } )(NavBar);