import React, { Component } from 'react';
import Console from '../components/Console'
import '../styles/Consoles.css'

class Consoles extends Component {
  
  state = {
    consoles: []
  }

  getConsoles() {
    const url = "http://localhost:3001/consoles"
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({
      consoles: data
    }))
  }
  
  
  
  componentDidMount() {
   this.getConsoles()
  }

  
  render() {
    return (
        <div className="console-container">
          <h2 className="xbox-console-header">Xbox</h2>
          <h2 className="playstation-console-header">Playstation</h2>
          <h2 className="nintendo-console-header">Nintendo</h2>
          {this.state.consoles && this.state.consoles.map(console => <Console key={console.id} console={console} />)}
        </div>
    )
  }
}
export default Consoles;