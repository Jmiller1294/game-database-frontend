import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const ProfileContainer = styled.div`
  text-align: center;
  margin: 50px;
  height: 1200px;
`

const Username = styled.h2`
  margin: 10px auto 10px auto;
`
const ProfileIcon = styled.img`
  height: 120px;
  width: 120px;
  margin: 10px auto 10px auto;
  border: 1px solid white;
  border-radius: 100px;
`

const FavoritesHeader = styled.h3`
`
const FavoritesContainer = styled.div`
  margin: 50px 0 50px 0;
`
const GamesList = styled.ul`
  height: 400px;
  width: 100%;
  border: 1px solid white;
`
const Game = styled.li`

`
const coverArt = styled.img`

`

class ProfilePage extends Component {

  render() {
    return (
      <ProfileContainer>
        <Username>{this.props.user && this.props.user.email}</Username>
        <ProfileIcon></ProfileIcon>
        <FavoritesContainer>
          <FavoritesHeader>Favorite Games</FavoritesHeader>
          <GamesList>

          </GamesList>
        </FavoritesContainer>
      </ProfileContainer>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(ProfilePage);