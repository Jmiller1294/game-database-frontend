import React, { Component } from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
import { addGames } from '../actions/gameActions';
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
const SearchBar = styled.form`
  margin-top: 50px;
  margin-bottom: 50px;
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
  height: 220px;
  margin-bottom: 40px;
  border-bottom: 1px solid grey;
`


class Games extends Component {

  state = {
    searchTerm: "",
    games: []
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getGames(this.state.searchTerm)
    this.setState({ searchTerm: ""})
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
    .then(data => this.setState({ games: data}))
    .catch(error => {console.log('error', error)})
  }

  render(){
    console.log(this.props.games)
    return (
      <Grid>
        <Row>
          <Col size={1}>
              <SearchBar onSubmit={(event) => this.handleSubmit(event)}>
                <SearchInput onChange={(event) => this.handleChange(event)} type="search" name="searchTerm" value={this.state.searchTerm}/>
                <SearchButton type="submit" value="Submit">Search</SearchButton>
              </SearchBar>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <GamesContainer>
              <GamesList>
                {this.state.games && this.state.games
                .map(game => <GameItem key={game.id}><Game game={game}/></GameItem>)}
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

export default connect(mapStateToProps, { addGames })(Games)