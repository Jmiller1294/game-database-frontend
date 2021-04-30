import { Redirect, Route , Switch} from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import Registration from './components/Registration';
import Login from './components/Login';
import GamesPage from './containers/GamesPage';
import ConsolesPage from './containers/ConsolesPage';
import About from './components/About';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { checkLoggedInStatus } from './actions/userActions';
import GameInfo from './components/GameInfo';
import ConsoleInfo from './components/ConsoleInfo';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #191919;
    font-family: 'Lato', sans-serif;
  } 
`

class App extends Component {
  componentDidMount() {
    //this.props.checkLoggedInStatus()
  }
  
  render() {
    console.log(this.props.loggedIn)
    console.log(this.props.user)
    return (
      <React.Fragment>
        <NavBar />
          <Switch>  
          <Route exact path="/" render={(props) => <HomePage {...props} user={this.props.user} />} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/games" component={GamesPage} />
          <Route exact path="/consoles" component={ConsolesPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gameInfo" component={GameInfo} />
          <Route exact path="/consoleInfo" component={ConsoleInfo} />
        </Switch>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.logged_in
})

export default connect(mapStateToProps, {checkLoggedInStatus})(App);
