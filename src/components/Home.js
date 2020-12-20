import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../Home.css';
import background from '../assets/homepage-background.jpg'


class Home extends Component {

    handleLogout() {
        this.props.logout()
    }

    render() {
        return(
            <div className="home">
                <h1>Home </h1>
                <p>user: {this.props.currentUser ? this.props.currentUser.email : null}</p>
                <p>status: {this.props.loggedIn ? "logged in!": null}</p>
                <button onClick={() => this.handleLogout()}>
                    Sign out
                </button>
            </div>
        )

    }
}
export default connect(null, { logout })(Home);