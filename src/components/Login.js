import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/userActions';
import styled from 'styled-components';
import { checkLoggedInStatus } from '../actions/userActions';

const LoginContainer = styled.div`

`
const LoginForm = styled.form`
    margin: 300px auto 0px auto;
    text-align: center;
    color: white;
`
const LoginFieldset = styled.fieldset`
    width: 100px;
    margin: 0px auto 0px auto;
`
const LoginButton = styled.button`
    margin: 10px;
`

class Login extends Component {
    state = {
        email: "",
        password: ""
    } 
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.startLogin(this.state)
        this.setState({
            email: "",
            password: ""
        })
        setTimeout(() => {  this.props.checkLoggedInStatus(); }, 500);
        setTimeout(() => {  this.checkLogged(); }, 1000);
    }

    checkLogged() {
        this.props.loggedIn === true ? this.props.history.push('/') : this.props.history.push('/login')
    }

    render () {
            return(
                <LoginContainer>
                    <LoginForm onSubmit={event => this.handleSubmit(event)}>
                        <LoginFieldset>
                            <legend>Please Login</legend>
                            <input onChange={event => this.handleChange(event)} type="text" name="email" value={this.state.email} placeholder="Email" />
                            <br></br>
                            <input onChange={event => this.handleChange(event)} type="text" name="password" value={this.state.password} placeholder="Password" />
                            <br></br>
                            <LoginButton type="submit" value="Submit">Login</LoginButton>
                        </LoginFieldset>
                    </LoginForm>
                </LoginContainer>
            )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser,
    loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps, { startLogin, checkLoggedInStatus })(Login);