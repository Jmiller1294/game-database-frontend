import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/userActions';


class Login extends Component {
    state = {
        email: null,
        password: null
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
    }


    render () {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input onChange={event => this.handleChange(event)} type="text" name="email" value={this.state.email} placeholder="Email" />
                    <br></br>
                    <input onChange={event => this.handleChange(event)} type="text" name="password" value={this.state.password} placeholder="Password" />
                    <br></br>
                    <button type="submit" value="Submit">Login</button>
                </form>
            </div>
        )
    } 
}
export default connect(null, { startLogin })(Login);