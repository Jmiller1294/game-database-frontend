import React from 'react';

const UpcomingGame = (props) => {
  return(
      <figure className="upcoming-game" >
        <img className="cover-art" key={props.game.id} src={props.game.cover.url} alt="Game Coming soon"/>
        <figcaption>{props.game.first_release_date}</figcaption>
      </figure>
  )
}
export default UpcomingGame;






