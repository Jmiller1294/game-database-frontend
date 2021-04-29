import React from 'react';
import styled from 'styled-components';

const Game = styled.figure`
  width: 100%;
  margin: 0;
  text-align: center;
`
const GameImage = styled.img`
  width: 100%;
  height: 200px;
`
const ReleaseDate = styled.figcaption`
`


const UpcomingGame = (props) => {

  const getDate = (seconds) => {
    const date = new Date(seconds * 1000);  
    const month = date.toLocaleString('default', { month: 'long' });
    let day = date.toString().substring(8,10)
    return month + " " + day;
  }

  return(
    <Game>
      <GameImage key={props.release.id} src={props.cover.url} alt="Game Coming soon"/>
      <ReleaseDate>Release Date: {getDate(props.release.date)}</ReleaseDate>
    </Game>
  )
}
export default UpcomingGame;






