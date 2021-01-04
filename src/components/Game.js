import React from 'react';
import '../styles/Game.css'

const Game = (props) => {
  return (
    <div className="game-container">
      <p>{props.game.name}</p>
      {
        props.game.cover === undefined ? <p>No Image</p> : <img className="cover-art" src={props.game.cover.url} alt="Cover Art"/>
      }  
    </div>
  )
}
export default Game