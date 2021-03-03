import React from 'react';

const UpcomingGames = (props) => {
  
  return (
    <div>
      {props.games.slice(0,10).map(game => <div className="upcoming-games" key={game.id}>hello</div>)}
    </div>
  )
}
export default UpcomingGames;