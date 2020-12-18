import './App.css';
import { Route , Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
import NavBar from './NavBar';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/registration" component={Registration} />
          <Route exact Path="/login" component={Login} />
          <Route exact Path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}
export default App;
