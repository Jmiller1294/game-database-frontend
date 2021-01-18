import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../styles/Home.css';
import background from '../assets/homepage-background.jpg'
import Articles from '../containers/Articles'

class Home extends Component {

    state = {
        articles: []
    }
    
    handleLogout() {
        this.props.logout()
        this.props.history.push("/login");
    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/everything?q=games' +
        '&apiKey=0176803c14204800ae658c2d02a9c37f';
        fetch(url) 
        .then(resp => resp.json())
        .then(data => this.setState({
            articles: data.articles
        }))
    }

    render() {
        console.log(this.props)
            return(
                <div className="content">
                    <div className="home">
                        <h1>Home</h1>
                        
                    </div>
                    <Articles articles={this.state.articles}/>
                </div>
            )
        }
    
}
export default connect(null, { logout })(Home);