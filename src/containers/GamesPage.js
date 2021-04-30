import React, { Component } from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
import { addGame } from '../actions/gameActions';
import '../styles/Games.css';
import styled from 'styled-components';

export const Grid = styled.div`
  
`
export const Row = styled.div`
  display: flex;
`
export const Col = styled.div`
  flex: ${ (props) => props.size};
  height: 100%;
`
const GamesContainer = styled.div`

`
const SerachBar = styled.form`
  margin-top: 50px;
  text-align: center;
`
const SearchInput = styled.input`
  width: 300px;
`
const SearchButton = styled.button`
  margin-left: 0;
`
const GamesList = styled.ul`
  list-style: none;
  width: 100%;
`
const GameItem = styled.li`
  width: 100%;
`


class Games extends Component {

  state = {
    searchTerm: ""
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getGames(this.state.searchTerm)
  }

  getGames(searchTerm) {
    const proxy = "http://127.0.0.1:8080/"
    const url = "https://api.igdb.com/v4/games"
    fetch(proxy + url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Client-ID': 'yy5am1hpn894dvf7mqk3k1ifx4qfkz',
        'Authorization': `Bearer ${process.env.REACT_APP_IGDB_API_KEY}`,
    },
    body: `search "${searchTerm}"; fields name,artworks,themes.url,storyline,screenshots.url,first_release_date,rating,platforms.name,similar_games.cover.url,videos.*,cover.*;limit 20;`
    })
    .then(resp => resp.json())
    .then(data => this.props.addGame(data))
    .catch(error => {console.log('error', error)})
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col size={1}>
              <SerachBar onSubmit={(event) => this.handleSubmit(event)}>
                <SearchInput onChange={(event) => this.handleChange(event)} type="search" name="searchTerm" value={this.state.searchTerm}/>
                <SearchButton type="submit" value="Submit">Search</SearchButton>
              </SerachBar>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <GamesContainer>
              <GamesList>
                {this.props.games.games && this.props.games.games
                .map(game => <GameItem><Game key={game.id} game={game}/></GameItem>)}
              </GamesList>
            </GamesContainer>
          </Col>
        </Row>
      </Grid>
    )
  }
}

  const mapStateToProps = state => {
    return {
      games: state.games
    }
  }
export default connect(mapStateToProps, { addGame })(Games)