import React from 'react';

const Info = (props) => {
  return (
    <div className="info">
      {console.log(props.location)}
      {props.location.game ?
        <img className="cover" src={props.location.game.cover.url} alt="cover"></img>
      :
        <h1>No Game Found</h1>
      }
    </div>
  )
}
export default Info;