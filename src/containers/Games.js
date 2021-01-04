import React, { Component } from 'react';
import Game from '../components/Game';
import '../styles/Games.css'

class Games extends Component {

  state = {
    games: []
  }
  
  componentDidMount() {
    const proxy = "http://127.0.0.1:8080/"
    const url = "https://api.igdb.com/v4/games"
    fetch(proxy + url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Client-ID': 'yy5am1hpn894dvf7mqk3k1ifx4qfkz',
        'Authorization': 'Bearer mkvho4b2s24a2o6ack23l52lfj9t0r',
    },
    body: "fields name,cover.*;limit 20;"
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      games: data
    }))
    
  }
  
  render(){
    return (
      <div>
        <div>
          <form id="search">
            <input id="search-bar" type="search" name="search" />
            <button id="search-button" type="submit" value="Submit">Search</button>
          </form>
        </div>
        {this.state.games && this.state.games.map(game => <Game key={game.id} game={game}/>)}
      </div>
    )
  }
}
export default Games