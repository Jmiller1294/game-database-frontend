import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 30px;
  min-height: 1200px;
  max-height: 1800;
  margin: 40px;
  text-align: left;
  background-color: grey;
  border-radius: 25px;
`
const GameTitle = styled.h1`
  text-decoration: underline;
  margin-bottom: 10px;
`
const GameCover = styled.img`
  margin-top: 0;
  width: 150px;
  height: 200px;
`
const GameRating = styled.p`
  font-size: 30px;
`
const PlatformList = styled.ul`
  padding: 15px;
  max-height: 100px;
`
const VideoContainer = styled.div`
  margin: 10px 0 10px 0;
`
const ScreenShotContainer = styled.div`
   margin: 10px 0 10px 0;
`
const SimilarGamesContainer = styled.div`
  margin: 10px 0 10px 0;
`

const GameInfo = (props) => {
  return (
      <>
        {props.location.game ?
          <InfoContainer>
            <GameTitle>{props.location.game.name}</GameTitle>
            <GameCover src={props.location.game.cover.url} alt="cover"></GameCover>
            <GameRating>Game Rating: {Math.floor(props.location.game.rating)}/100</GameRating>
            <h3>Platforms</h3>
            <PlatformList>{props.location.game.platforms.map(platform => <li key={platform.id}>{platform.name}</li>)}</PlatformList>
            <h3>Videos</h3>
            <VideoContainer>
              {props.location.game.videos.slice(0,4).map(video => <iframe className="" key={video.id} title={video.name} src={`https://www.youtube.com/embed/${video.video_id}`} width="360" height="300" ></iframe>) }
            </VideoContainer>
            <h3>Screenshots</h3>
            <ScreenShotContainer>
              {props.location.game.screenshots.map(screenshot => <img className="screenshot" src={screenshot.url} alt="screenshot"></img>)}
            </ScreenShotContainer> 
            <h3>Similar Games</h3>
            <SimilarGamesContainer>
              {props.location.game.similar_games.map(game => <img className="similar-game" src={game.cover.url} alt="similar games"></img>)}
            </SimilarGamesContainer>
          </InfoContainer>
        :
          <h1>No Game Found</h1>
        } 
    </>
  )
}
export default GameInfo;