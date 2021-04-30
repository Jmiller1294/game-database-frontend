import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Xbox = styled.div`
`


const Console = (props) => {
  if(props.console.name.includes("Xbox")) {
    return (
      <div className="xbox"> 
         <Link to={{
          pathname: '/consoleInfo',
          console: props.console
        }}>{props.console.name}</Link>
      </div>
    )
  }
  else {
    return (
      <div className="playstation"> 
         <Link to={{
          pathname: '/consoleInfo',
          console: props.console
        }}>{props.console.name}</Link>
      </div>
    )
  }
}
export default Console;