import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
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
import ProfilePage from './containers/ProfilePage';

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
    this.props.checkLoggedInStatus()
  }
  
  render() {
      return (
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/games" component={GamesPage} />
            <Route exact path="/consoles" component={ConsolesPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gameInfo" component={GameInfo} />
            <Route exact path="/consoleInfo" component={ConsoleInfo} />
            <ProtectedRoute exact path="/profile" component={ProfilePage} />
          </Switch>
          <GlobalStyle />
        </React.Fragment>
      );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps, {checkLoggedInStatus})(App);
