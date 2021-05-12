import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/gameActions';
import profileImage from '../assets/dragon-3708746_640.jpg';


const ProfileContainer = styled.div`
  color: white;
  text-align: center;
  margin: 50px;
  height: 1200px;
`

const Username = styled.h2`
  margin: 10px auto 0 auto;
`
const ProfileIcon = styled.img`
  height: 120px;
  width: 120px;
  margin: 0 auto 10px auto;
  border-radius: 100px;
`

const FavoritesHeader = styled.h2`
  margin-bottom: 75px;
`
const FavoritesContainer = styled.div`
  margin: 50px 0 50px 0;
`
const GamesList = styled.ul`
  list-style: none;
  height: 400px;
  width: 100%;
`
const GameItem = styled.li`
   float: left;
   width: 150px;
   height: 200px;
   margin-right: 20px;
`
const GameArt = styled.img`
  margin-top: 10px;
  width: 100%;
  height: 190px;
`

const RemoveButton = styled.button`

`

class ProfilePage extends Component {

  handleClick = () => {
   this.removeFavorite()
  }

  render() {
    return (
      <ProfileContainer>
        <Username>{this.props.user && this.props.user.email}</Username>
        <ProfileIcon src={profileImage}></ProfileIcon>
        <FavoritesContainer>
          <FavoritesHeader>Favorite Games</FavoritesHeader>
          <GamesList>
            {this.props.favorites.map(favorite => <GameItem key={favorite.id}>
              <b>{favorite.name}</b>
              <GameArt src={favorite.cover.url}></GameArt>
              <RemoveButton onClick={() => this.handleClick()}>Remove From List</RemoveButton>
            </GameItem>)}
          </GamesList>
        </FavoritesContainer>
      </ProfileContainer>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn,
  favorites: state.games.favorites
})

export default connect(mapStateToProps, { removeFavorite })(ProfilePage);