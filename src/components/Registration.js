import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startCreateUser } from '../actions/userActions';

const RegistrationContainer = styled.div`
    text-align: center;
    margin: 300px auto 0px auto;
`
const RegistrationForm = styled.form`
    
`
const Fieldset = styled.fieldset`
    color: white;
    width: 100px;
    margin: 0px auto 0px auto;
`

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
            <RegistrationContainer>
                <RegistrationForm onSubmit={event => this.handleSubmit(event)}>
                    <Fieldset>
                        <legend>Signup</legend>
                        <input onChange={event => this.handleChange(event)} type="text" name="email" value={this.state.email} placeholder="Email" />
                        <br></br>
                        <input onChange={event => this.handleChange(event)} type="password" name="password" value={this.state.password} placeholder="Password" />
                        <br></br>
                        <input onChange={event => this.handleChange(event)} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder="Retype Password" />
                        <br></br>
                        <button type="submit" value="Submit">Signup</button>
                    </Fieldset>
                </RegistrationForm>
            </RegistrationContainer>
        )
    } 
}
export default connect(null, { startCreateUser })(Registration);