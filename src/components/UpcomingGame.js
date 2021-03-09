import React from 'react';

const getDate = (date) => {

}

const UpcomingGame = (props) => {
  return(
      <figure className="upcoming-game" >
        <img className="cover-art" key={props.release.id} src={props.cover.url} alt="Game Coming soon"/>
        <figcaption>{props.release.date}</figcaption>
      </figure>
  )
}
export default UpcomingGame;






