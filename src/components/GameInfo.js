import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addFavorite } from '../actions/gameActions';
import { Redirect } from 'react-router-dom';

const InfoContainer = styled.div`
  color: white; 
  padding: 30px;
  min-height: 1200px;
  max-height: 1800;
  margin: 40px;
  text-align: left;
  border-radius: 25px;
`
const GameTitle = styled.h1`
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
const FavoriteButton = styled.button`
  width: 100px;
  display: block;
`

class GameInfo extends Component {

  handleClick = () => {
    this.props.addFavorite(this.props.location.game)
  }

  render() {
    const { game } = this.props.location;

    return (
        <>
          {game ?
            <InfoContainer>
              <GameTitle>{game.name}</GameTitle>
              <GameCover src={game.cover.url} alt="cover"></GameCover>
              {this.props.loggedIn ? <FavoriteButton onClick={this.handleClick}>favorite</FavoriteButton>: null } 
              <GameRating>Game Rating: {Math.floor(game.rating)}/100</GameRating>
              <h3>Platforms</h3>
              <PlatformList>{game.platforms.map(platform => <li key={platform.id}>{platform.name}</li>)}</PlatformList>
              <h3>Videos</h3>
              <VideoContainer>
                {game.videos && game.videos.slice(0,4).map(video => <iframe className="" key={video.id} title={video.name} src={`https://www.youtube.com/embed/${video.video_id}`} width="360" height="300" ></iframe>) }
              </VideoContainer>
              <h3>Screenshots</h3>
              <ScreenShotContainer>
                {game.screenshots.map(screenshot => <img key={screenshot.id} className="screenshot" src={screenshot.url} alt="screenshot"></img>)}
              </ScreenShotContainer> 
              <h3>Similar Games</h3>
              <SimilarGamesContainer>
                {game.similar_games.map(game => <img key={game.id} className="similar-game" src={game.cover.url} alt="similar games"></img>)}
              </SimilarGamesContainer>
            </InfoContainer>
          :
          <Redirect to="/games" />
           
          } 
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn,
  favorites: state.games.favorites
})

export default connect(mapStateToProps, { addFavorite })(GameInfo);