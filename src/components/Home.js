import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../styles/Home.css';
import background from '../assets/homepage-background.jpg'

class Home extends Component {


    
    

    componentDidMount() {
        const proxy = "http://127.0.0.1:8080/"
        const url = "https://www.gamespot.com/api/articles/?api_key=50aaadecc9866a73d5679c6e5c6a3ce3ffa5510b&format=json&limit=5"
        fetch(proxy + url, {
            method  : 'GET', 
            headers : {
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
             "User-Agent"   : "Justin"
            }
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.log('error', error));
    }

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