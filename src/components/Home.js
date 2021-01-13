import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../styles/Home.css';
import background from '../assets/homepage-background.jpg'
import Articles from '../containers/Articles'

class Home extends Component {


    
    

    componentDidMount() {
        const url = 'http://newsapi.org/v2/everything?q=video games' +
        '&apiKey=0176803c14204800ae658c2d02a9c37f';
        fetch(url) 
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    handleLogout() {
        this.props.logout()
        this.props.history.push("/login");
    }

    render() {
        console.log(this.props)
            return(
                <div className="content">
                    <div className="home">
                        <h1>Home </h1>
                        <p>user: {this.props.user ? this.props.user.email : null}</p>
                        <p>status: {this.props.user ? "logged in!": null}</p>
                        <button onClick={() => this.handleLogout()}>
                            Sign out
                        </button>
                    </div>
                    <Articles />
                </div>
            )
        }
    
}
export default connect(null, { logout })(Home);