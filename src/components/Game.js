import React from 'react';

const Game = (props) => {
  return (
    <div>
      <p>{props.game.name}</p>
      {
        props.game.cover === undefined ? <p>No Image</p> : <img src={props.game.cover.url} alt="Cover Art"/>
      }  
    </div>
  )
}
export default Game