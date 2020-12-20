import './App.css';
import { Route , Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
import NavBar from './NavBar';
import { connect } from 'react-redux'
import { checkLoggedInStatus } from './actions/userActions'

class App extends Component {
  componentDidMount() {
    this.props.checkLoggedInStatus()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  logged_in: state.user.logged_in
})

export default connect(mapStateToProps, {checkLoggedInStatus})(App);
