import React, { useState, useEffect } from 'react';
import Console from '../components/Console';
import styled from 'styled-components';


const ConsolesContainer = styled.div`
  width: 100%;
  position: relative;
  color: white;
  padding-left: 50px;
  height: 500px;
`
const XboxHeader = styled.h2`
  text-decoration: underline;
`
const PlaystationHeader = styled.h2`
  position: relative;
  top: 200px;
  text-decoration: underline;
`
const NintendoHeader = styled.h2`
  top: 300px;
  position: relative;
  text-decoration: underline;
`

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
    .catch(error => {console.log('error', error)})
  }
  
  useEffect(() => {
    getConsoles();
  }, []);
    
   
  return (
    <ConsolesContainer>
      <XboxHeader>Xbox</XboxHeader>
      <PlaystationHeader>Playstation</PlaystationHeader>
      <NintendoHeader>Nintendo</NintendoHeader>
      {state.consoles && state.consoles.map(console => <Console key={console.id} console={console} />)}
    </ConsolesContainer>
  )
}
export default Consoles;