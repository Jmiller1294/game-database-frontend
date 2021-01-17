import './styles/App.css';
import { Redirect, Route , Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Games from './containers/Games';
import Consoles from './containers/Consoles';
import About from './components/About';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { checkLoggedInStatus } from './actions/userActions';
import Info from './components/Info';

class App extends Component {
  componentDidMount() {
    //this.props.checkLoggedInStatus()
  }
  
  
  render() {
    console.log(this.props.loggedIn)
    console.log(this.props.user)
    
      return (
        <div className="App">
          <NavBar />
          <Switch>  
            <Route exact path="/" render={(props) => <Home {...props} user={this.props.user} />} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/consoles" component={Consoles} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info" component={Info} />
          </Switch>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.logged_in
})

export default connect(mapStateToProps, {checkLoggedInStatus})(App);
