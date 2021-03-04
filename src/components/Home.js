import React, { Component } from 'react';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';
import '../styles/Home.css';
import Articles from '../containers/Articles';
import UpcomingGames from './UpcomingGames';

class Home extends Component {

    state = {
        articles: [],
        games: []
    }
    
    handleLogout() {
        this.props.logout()
        this.props.history.push("/login");
    }

    getArticles() {
        const url = 'http://newsapi.org/v2/everything?q=games' +
        `&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
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
            'Authorization': `Bearer ${process.env.REACT_APP_IGDB_API_KEY}`,
        },
        body: `fields name,cover.*;where first_release_date > ${Math.floor(Date.now() / 1000)};limit 20;`
        })
        .then(resp => resp.json())
        .then(data => this.setState({
            games: data
        }))
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
                        <h2>Upcoming Games</h2>
                        <UpcomingGames games={this.state.games}/>
                    </div>
                    <Articles articles={this.state.articles}/>
                </div>
            )
        }
    
}
export default connect(null, { logout })(Home);