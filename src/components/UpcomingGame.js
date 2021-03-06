import React from 'react';

const UpcomingGame = (props) => {
  return(
    <>
      <img className="upcoming-game" key={props.game.id} src={props.game.cover.url} alt="Game Coming soon"/>
    </>
    
  )
}
export default UpcomingGame;






