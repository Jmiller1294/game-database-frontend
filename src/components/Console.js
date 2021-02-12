import React from 'react';
import { Link } from 'react-router-dom';

const Console = (props) => {
  return (
    <div>
       <Link to={{
        pathname: '/consoleInfo',
        console: props.console
      }}>{props.console.name}</Link>
    </div>
  )
}
export default Console;