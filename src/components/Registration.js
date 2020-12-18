import React, { Component } from 'react';

class Registration extends Component {

    state = {
        email: null,
        password: null
    } 
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.email)
        console.log(this.state.password)
    }

    handleSubmit(event) {

    }


    render () {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input onChange={event => this.handleChange(event)} type="text" name="email" value={this.state.email} />
                    <input onChange={event => this.handleChange(event)} type="text" name="password" value={this.state.password} />
                    <button type="submit" value="Submit">Signup</button>
                </form>
            </div>
        )
    } 
}
export default Registration;