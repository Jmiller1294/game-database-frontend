import { Component } from "react";
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import styled from 'styled-components';
import UpcomingGames from './UpcomingGames';
import Articles from './Articles';

export const Grid = styled.div`

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
  
  handleLogout() {
      this.props.logout()
      this.props.history.push("/login");
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
  }

 
  render() {
      console.log(this.props)
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
export default connect(null, { logout })(Homepage);