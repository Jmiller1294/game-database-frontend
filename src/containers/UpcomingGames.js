import React from 'react';
import styled from 'styled-components';
import UpcomingGame from '../components/UpcomingGame';

export const UpcomingGamesCont = styled.div`
  position: relative;
  height: 350px;
  color: white;
  text-align: center;
  padding: 10px;
`

const Header = styled.h2`
  text-align: center;
`

const GamesList = styled.ul`
  list-style: none;
`

const GameItem = styled.li`
   float: left;
   width: 18%;
   height: 210px;
   margin-right: 10px;
`

const UpcomingGames = props => {

  const sortDuplicates = data =>{
    const array = data
    const unique = Array.from(new Set(array.map(a => a.game.id)))
      .map(id => {
        return array.find(a => a.game.id === id)
      })
    return unique
  }


  return (
    <UpcomingGamesCont>
      <Header>Upcoming Games</Header>
        <GamesList> 
          {sortDuplicates(props.games).slice(0,5)
          .map(game => { return <GameItem><UpcomingGame key={game.id} release={game} 
            game={game.game} cover={game.game.cover}/></GameItem>})
          }
        </GamesList>
    </UpcomingGamesCont>
  )
}
export default UpcomingGames;