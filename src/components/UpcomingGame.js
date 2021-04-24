import React from 'react';

const getDate = (seconds) => {
  const date = new Date(seconds * 1000);  
  const month = date.toLocaleString('default', { month: 'long' });
  let day = date.toString().substring(8,10)
  return month + " " + day;
}

const UpcomingGame = (props) => {
  return(
      <figure className="upcoming-game" >
        <img className="art" key={props.release.id} src={props.cover.url} alt="Game Coming soon"/>
        <figcaption>Release Date: {getDate(props.release.date)}</figcaption>
      </figure>
  )
}
export default UpcomingGame;






