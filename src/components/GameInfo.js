import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addFavorite } from '../actions/gameActions';

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

const FavoriteButton = styled.button`
  width: 100px;
  display: block;
`

class GameInfo extends Component {

  handleClick = () => {
    this.props.addFavorite(this.props.location.game)
  }

  componentDidMount() {
    console.log(this.props.favorites)
  }

  render() {
    return (
        <>
          {this.props.location.game ?
            <InfoContainer>
              <GameTitle>{this.props.location.game.name}</GameTitle>
              <GameCover src={this.props.location.game.cover.url} alt="cover"></GameCover>
              <FavoriteButton onClick={() => this.handleClick()}>favorite</FavoriteButton>
              <GameRating>Game Rating: {Math.floor(this.props.location.game.rating)}/100</GameRating>
              <h3>Platforms</h3>
              <PlatformList>{this.props.location.game.platforms.map(platform => <li key={platform.id}>{platform.name}</li>)}</PlatformList>
              <h3>Videos</h3>
              <VideoContainer>
                {this.props.location.game.videos.slice(0,4).map(video => <iframe className="" key={video.id} title={video.name} src={`https://www.youtube.com/embed/${video.video_id}`} width="360" height="300" ></iframe>) }
              </VideoContainer>
              <h3>Screenshots</h3>
              <ScreenShotContainer>
                {this.props.location.game.screenshots.map(screenshot => <img key={screenshot.id} className="screenshot" src={screenshot.url} alt="screenshot"></img>)}
              </ScreenShotContainer> 
              <h3>Similar Games</h3>
              <SimilarGamesContainer>
                {this.props.location.game.similar_games.map(game => <img key={game.id} className="similar-game" src={game.cover.url} alt="similar games"></img>)}
              </SimilarGamesContainer>
            </InfoContainer>
          :
            <h1>No Game Found</h1>
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