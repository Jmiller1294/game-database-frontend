import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameBox = styled.div`
  display: inline-block;
`
const GameTitle = styled.span`
  display: block;
  margin-bottom: 10px;
`
const GameImage = styled.img`
  height: 170px;
  width: 150px;
`

const Game = (props) => {
  const { game } = props;

  return (
    <GameBox>
      <GameTitle>
        <Link to={{
          pathname: '/gameInfo',
          game: game
        }}>{game.name}</Link>
      </GameTitle>
      {game.cover === undefined ? <p>No Image</p> 
      : <GameImage src={game.cover.url} alt="Cover Art"/>}  
    </GameBox>
  )
}
export default Game