import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/userActions';
import "../styles/Login.css"
import styled from 'styled-components';

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
const LoginButton = styled.form`
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
        this.props.history.push("/home")
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
                            <button type="submit" value="Submit">Login</button>
                        </LoginFieldset>
                    </LoginForm>
                </LoginContainer>
            )
    }
}
export default connect(null, { startLogin })(Login);