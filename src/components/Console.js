import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Xbox = styled.div`
  margin: 10px;
  position: relative;
  bottom: 100px;
`
const Playstation = styled.div`
  margin: 10px;
  position: relative;
  bottom: 50px;
`
const Nintendo = styled.div`
  margin: 10px;
  position: relative;
  bottom: -10px;
`


const renderConsole = (console) => {
  if(console.name.includes("Xbox")) {
    return (
      <Xbox> 
         <Link to={{
          pathname: '/consoleInfo',
          console: console
        }}>{console.name}</Link>
      </Xbox>
    )
  }
  else if(console.name.includes("Nintendo") || console.name.includes("Wii") || console.name.includes("GameCube")){
    return (
      <Nintendo> 
         <Link to={{
          pathname: '/consoleInfo',
          console: console
        }}>{console.name}</Link>
      </Nintendo>
    )
  }
  else {
    return (
      <Playstation> 
          <Link to={{
            pathname: '/consoleInfo',
            console: console
          }}>{console.name}</Link>
      </Playstation>
    )
  }
}

const Console = (props) => {
  const { console } = props;
  return (
    <>
      {renderConsole(console)}
    </>
  )
}
export default Console;