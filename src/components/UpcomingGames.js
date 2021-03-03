import React from 'react';

const UpcomingGames = (props) => {
  
  return (
    <div>
      {props.games.slice(0,7).map(game => <img key={game.id} className="upcoming-games" src={game.cover.url} alt="Game Coming soon"/>)}
    </div>
  )
}
export default UpcomingGames;