import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import profileImage from '../assets/dragon-3708746_640.jpg';


const ProfileContainer = styled.div`
  text-align: center;
  margin: 50px;
  height: 1200px;
`

const Username = styled.h1`
  margin: 10px auto 10px auto;
`
const ProfileIcon = styled.img`
  height: 120px;
  width: 120px;
  margin: 10px auto 10px auto;
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

class ProfilePage extends Component {

  


  render() {
    console.log(this.props.favorites)
    return (
      <ProfileContainer>
        <Username>{this.props.user && this.props.user.email}</Username>
        <ProfileIcon src={profileImage}></ProfileIcon>
        <FavoritesContainer>
          <FavoritesHeader>Favorite Games</FavoritesHeader>
          <GamesList>
            {this.props.favorites.map(favorite => <GameItem>
              <b>{favorite.name}</b>
              <GameArt src={favorite.cover.url}></GameArt>
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

export default connect(mapStateToProps)(ProfilePage);