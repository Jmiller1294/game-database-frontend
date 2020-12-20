import React, { Component } from 'react';
import { connect } from 'react-redux'
import { startCreateUser } from '../actions/userActions'

class Registration extends Component {

    state = {
        email: "",
        password: "",
        passwordConfirmation: ""
    } 
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.email)
        console.log(this.state.password)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        this.props.startCreateUser(this.state)
    }


    render () {
        return(
            <div>
                <form className="registration-form" onSubmit={event => this.handleSubmit(event)}>
                    <input onChange={event => this.handleChange(event)} type="text" name="email" value={this.state.email} placeholder="Email" />
                    <br></br>
                    <input onChange={event => this.handleChange(event)} type="password" name="password" value={this.state.password} placeholder="Password" />
                    <br></br>
                    <input onChange={event => this.handleChange(event)} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder="Retype Password" />
                    <br></br>
                    <button type="submit" value="Submit">Signup</button>
                </form>
            </div>
        )
    } 
}
export default connect(null, { startCreateUser })(Registration);