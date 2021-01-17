import React from 'react';

const Info = (props) => {
  return (
    <div>
      {props.location.game.name}
      {console.log(props.location.game)}
    </div>
  )
}
export default Info;