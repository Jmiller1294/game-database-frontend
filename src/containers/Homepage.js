import { Component } from "react";
import { connect } from 'react-redux';

import styled from 'styled-components';
import UpcomingGames from './UpcomingGames';
import Articles from './Articles';
import backgroundPic from '../assets/homepage.jpg';

export const Grid = styled.div`
  background-image: url(${backgroundPic});
  background-repeat: no-repeat;
  background-attachment: fixed;
`
export const Row = styled.div`
  display: flex;
`
export const Col = styled.div`
  flex: ${ (props) => props.size};
  height: 100%;
`


class Homepage extends Component {

  state = {
      articles: [],
      games: []
  }
  
  

  getArticles() {
      const url = 'http://newsapi.org/v2/everything?q=games' +
      `&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      fetch(url) 
      .then(resp => resp.json())
      .then(data => this.setState({
          articles: data.articles
      }))
  }
  
  getGames() {
      const proxy = "http://127.0.0.1:8080/"
      const url = "https://api.igdb.com/v4/release_dates"
      fetch(proxy + url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Client-ID': 'yy5am1hpn894dvf7mqk3k1ifx4qfkz',
          'Authorization': `Bearer ${process.env.REACT_APP_IGDB_API_KEY}`,
      },
      body: `fields category,date,platform.name,game.name,game.cover.*;where date > ${Math.floor(Date.now() / 1000)}; sort date asc; limit 30;`
      })
      .then(resp => resp.json())
      .then(data => this.setState({
          games: data
      }))
      .catch(error => {console.log('error', error)})
  }
  
  componentDidMount() {
      this.getGames()
      this.getArticles()
      this.getToken()
      console.log(this.props)
  }


  getToken() {
    const url = "https://id.twitch.tv/oauth2/token?client_id=yy5am1hpn894dvf7mqk3k1ifx4qfkz&client_secret=dr4jl32fbhp26p0y53tg2fvqvp8jo5&grant_type=client_credentials"
    fetch(url, {
      method: "POST",
        headers: {
          'Accept': 'application/json',
        },
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
  }
 
  render() {
      return(
        <Grid>
          <Row>
            <Col size={1}>
              <UpcomingGames games={this.state.games}/>
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              <Articles articles={this.state.articles}/>
            </Col>
          </Row>
        </Grid>
      )
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(Homepage);


