import React, { Component } from 'react';
import Console from '../components/Console'

class Consoles extends Component {
  

  state = {
    consoles: []
  }

  componentDidMount() {
    const url = "http://localhost:3001/consoles"
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({
      consoles: data
    }))
  }



  // componentDidMount() {
  //   const proxy = "http://127.0.0.1:8080/"
  //   const url = "https://api.igdb.com/v4/platforms"
  //   fetch(proxy + url, {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Client-ID': 'yy5am1hpn894dvf7mqk3k1ifx4qfkz',
  //       'Authorization': 'Bearer mkvho4b2s24a2o6ack23l52lfj9t0r',
  //   },
  //   body: "fields name,url,abbreviation,category,checksum,created_at,platform_logo,summary;where created_at > 1262550260; where category = (1,4) ;limit 100;"
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
    
  // }

  
  render() {
    console.log(this.state.consoles)
    return (
      <div>
        {this.state.consoles && this.state.consoles.map(console => <Console key={console.id} console={console} />)}
      </div>
    )
  }
}
export default Consoles;