import React from 'react';
import { Link } from 'react-router-dom'

const Game = (props) => {
  return (
    <div className="game-container">
      <Link to={{
        pathname: '/gameInfo',
        game: props.game
      }}>{props.game.name}</Link>
      {
        props.game.cover === undefined ? <p>No Image</p> : <img className="cover-art" src={props.game.cover.url} alt="Cover Art"/>
      }  
    </div>
  )
}
export default Game