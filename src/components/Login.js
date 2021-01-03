import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/userActions';
import "../styles/login.css"


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
                <div id="login-form">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <fieldset>
                            <legend>Please Login</legend>
                            <input onChange={event => this.handleChange(event)} type="text" name="email" value={this.state.email} placeholder="Email" />
                            <br></br>
                            <input onChange={event => this.handleChange(event)} type="text" name="password" value={this.state.password} placeholder="Password" />
                            <br></br>
                            <button type="submit" value="Submit">Login</button>
                        </fieldset>
                    </form>
                </div>
            )
    }
}
export default connect(null, { startLogin })(Login);