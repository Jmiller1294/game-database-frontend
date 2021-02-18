import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../styles/Home.css';
import background from '../assets/homepage.jpg'
import Articles from '../containers/Articles'

class Home extends Component {

    state = {
        articles: []
    }
    
    handleLogout() {
        this.props.logout()
        this.props.history.push("/login");
    }

    getArticles() {
        const url = 'http://newsapi.org/v2/everything?q=games' +
        '&apiKey=0176803c14204800ae658c2d02a9c37f';
        fetch(url) 
        .then(resp => resp.json())
        .then(data => this.setState({
            articles: data.articles
        }))
    }
    
    getGames() {
        const proxy = "http://127.0.0.1:8080/"
        const url = "https://api.igdb.com/v4/games"
        fetch(proxy + url, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Client-ID': 'yy5am1hpn894dvf7mqk3k1ifx4qfkz',
            'Authorization': 'Bearer mkvho4b2s24a2o6ack23l52lfj9t0r',
        },
        body: `fields name,cover.*;where first_release_date > ${Math.floor(Date.now() / 1000)};limit 20;`
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => {console.log('error', error)})
    }
    
    componentDidMount() {
        this.getGames()
        this.getArticles()
    }

   
    render() {
        console.log(this.props)
            return(
                <div className="homepage">
                    <div className="upcoming">
                     
                    </div>
                    <Articles articles={this.state.articles}/>
                </div>
            )
        }
    
}
export default connect(null, { logout })(Home);