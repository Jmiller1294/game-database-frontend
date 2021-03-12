import React, { Component } from 'react';
import UpcomingGame from '../components/UpcomingGame';

class UpcomingGames extends Component {


  render() {
    return (
      <div className="upcoming-games-container">
        {console.log(this.props.games)}
        <h2 className="upcoming-games-header">Upcoming Games</h2>
        {console.log(this.props.games)}
        {this.props.games.slice(0,5).map(game => <UpcomingGame key={game.id} release={game} game={game.game} cover={game.game.cover}/>)}
      </div>
    )
  }
}
export default UpcomingGames;