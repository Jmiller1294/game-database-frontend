import React, { Component } from 'react';
import UpcomingGame from '../components/UpcomingGame';

class UpcomingGames extends Component {


  render() {
    return (
      <div className="upcoming-games-container">
        {console.log(this.props.games)}
        <h2 className="upcoming-games-header">Upcoming Games</h2>
        {this.props.games.slice(0,6).map(game => <UpcomingGame key={game.id} game={game} />)}
      </div>
    )
  }
}
export default UpcomingGames;