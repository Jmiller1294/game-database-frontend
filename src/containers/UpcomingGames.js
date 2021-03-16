import React, { Component } from 'react';
import UpcomingGame from '../components/UpcomingGame';

class UpcomingGames extends Component {

  sortDuplicates(data) {
    const array = data
    const unique = Array.from(new Set(array.map(a => a.game.id)))
      .map(id => {
        return array.find(a => a.game.id === id)
      })
    return unique
  }


  render() {
    return (
      <div className="upcoming-games-container">
        <h2 className="upcoming-games-header">Upcoming Games</h2>
        {}
        {this.sortDuplicates(this.props.games).slice(0,5).map(game => <UpcomingGame key={game.id} release={game} game={game.game} cover={game.game.cover}/>)}
      </div>
    )
  }
}
export default UpcomingGames;