import React from 'react';

const ConsoleInfo = (props) => {

  return(
    <>
      {console.log(props.location.console)}
      {props.location.company}
    </>
  )
}
export default ConsoleInfo;