import React, { Component } from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
import { addGame } from '../actions/gameActions';
import '../styles/Games.css';

class Games extends Component {

  state = {
    searchTerm: ""
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getGames(this.state.searchTerm)
  }

  getGames(searchTerm) {
    const proxy = "http://127.0.0.1:8080/"
    const url = "https://api.igdb.com/v4/games"
    fetch(proxy + url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Client-ID': 'yy5am1hpn894dvf7mqk3k1ifx4qfkz',
        'Authorization': `Bearer ${process.env.REACT_APP_IGDB_API_KEY}`,
    },
    body: `search "${searchTerm}"; fields name,artworks,themes.url,storyline,screenshots.url,first_release_date,rating,platforms.name,similar_games.cover.url,videos.*,cover.*;limit 20;`
    })
    .then(resp => resp.json())
    .then(data => this.props.addGame(data))
    .catch(error => {console.log('error', error)})
  }

  render(){
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleSubmit(event)} id="search">
            <input onChange={(event) => this.handleChange(event)} id="search-bar" type="search" name="searchTerm" value={this.state.searchTerm} />
            <button id="search-button" type="submit" value="Submit">Search</button>
          </form>
        </div>
        {this.props.games.games && this.props.games.games.map(game => <Game key={game.id} game={game}/>)}
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      games: state.games
    }
  }
export default connect(mapStateToProps, { addGame })(Games)