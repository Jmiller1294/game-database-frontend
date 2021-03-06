import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white
`

const ConsoleInfo = (props) => {

  return(
    <Container>
      {console.log(props.location.console)}
      <h3>{props.location.console.name}</h3>
      <h4>Release Date: {props.location.console.release_date}</h4>
      <h4>Company: {props.location.console.company}</h4>
      <h4>Generation: {props.location.console.generation}</h4>
      <h4>Launch Date: {props.location.console.launch_price}</h4>
      <h4>CPU: {props.location.console.cpu}</h4>
      <h4>GPU: {props.location.console.gpu}</h4>
      <h4>Units Sold: {props.location.console.units_sold}</h4>
    </Container>
  )
}
export default ConsoleInfo;