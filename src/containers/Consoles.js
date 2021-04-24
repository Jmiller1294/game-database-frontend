import React, { useState, useEffect } from 'react';
import Console from '../components/Console'
import '../styles/Consoles.css'

const Consoles = props => {
  
  const [state, setState] = useState({
    consoles: []
  })
    
  const getConsoles = () => {
    const url = "http://localhost:3001/consoles"
    fetch(url)
    .then(resp => resp.json())
    .then(data => setState({
      consoles: data
    }))
  }
  
  useEffect(() => {
    getConsoles();
  }, []);
    
   
  return (
    <div className="console-container">
      <h2 className="xbox-console-header">Xbox</h2>
      <h2 className="playstation-console-header">Playstation</h2>
      <h2 className="nintendo-console-header">Nintendo</h2>
      {state.consoles && state.consoles.map(console => <Console key={console.id} console={console} />)}
    </div>
  )
}
export default Consoles;