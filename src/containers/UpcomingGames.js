import React, { Component } from 'react';
import UpcomingGame from '../components/UpcomingGame';

class UpcomingGames extends Component {

  sortDuplicates(data) {
    const array = data;
    let newArray = [];
    console.log(array[0])
    newArray.push(array[0])
    console.log(newArray)
    for(let i = 0; i < array.length; i++) {
      
      let found = false;
      for(let j = 0; j < newArray.length;j++) {
        if(array[i].game.id === array[j].game.id) {
          found = true
        }
      }
      if(!found) {
        newArray.push(array[i])
      }
    
    } 
  }


  render() {
    return (
      <div className="upcoming-games-container">
        <h2 className="upcoming-games-header">Upcoming Games</h2>
        {this.sortDuplicates(this.props.games)}
        {this.props.games.slice(0,5).map(game => <UpcomingGame key={game.id} release={game} game={game.game} cover={game.game.cover}/>)}
      </div>
    )
  }
}
export default UpcomingGames;