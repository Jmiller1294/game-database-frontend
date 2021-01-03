import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../styles/Home.css';
import background from '../assets/homepage-background.jpg'

class Home extends Component {

    handleLogout() {
        this.props.logout()
        this.props.history.push("/login");
    }

    render() {
        console.log(this.props)
            return(
                <div className="home">
                    <h1>Home </h1>
                    <p>user: {this.props.user ? this.props.user.email : null}</p>
                    <p>status: {this.props.user ? "logged in!": null}</p>
                    <button onClick={() => this.handleLogout()}>
                        Sign out
                    </button>

                </div>
            )
        }
    
}
export default connect(null, { logout })(Home);