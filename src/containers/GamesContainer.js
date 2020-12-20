import React, { Component } from 'react';

class GamesContainer extends Component {
  
  componentDidMount() {
    fetch("https://api.rawg.io/api/platforms?key=1f2308f71a1943d8bde593eaeb0ddde5")
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  
  render(){
    return (
      <div>

      </div>
    )
  }
}
export default GamesContainer