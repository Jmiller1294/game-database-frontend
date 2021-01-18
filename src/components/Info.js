import React from 'react';

const Info = (props) => {
  return (
    <div>
      <img className="cover" src={props.location.game.cover.url} alt="cover"></img>
      {console.log(props.location.game)}
    </div>
  )
}
export default Info;