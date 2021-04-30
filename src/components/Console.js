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


const Console = (props) => {
  if(props.console.name.includes("Xbox")) {
    return (
      <Xbox> 
         <Link to={{
          pathname: '/consoleInfo',
          console: props.console
        }}>{props.console.name}</Link>
      </Xbox>
    )
  }
  else {
    return (
      <Playstation> 
         <Link to={{
          pathname: '/consoleInfo',
          console: props.console
        }}>{props.console.name}</Link>
      </Playstation>
    )
  }
}
export default Console;