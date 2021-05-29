import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
`

const ConsoleInfo = (props) => {
  const { console } = props.location

  return(
    <Container>
      <h3>{console.name}</h3>
      <h4>Release Date: {console.release_date}</h4>
      <h4>Company: {console.company}</h4>
      <h4>Generation: {console.generation}</h4>
      <h4>Launch Date: {console.launch_price}</h4>
      <h4>CPU: {console.cpu}</h4>
      <h4>GPU: {console.gpu}</h4>
      <h4>Units Sold: {console.units_sold}</h4>
    </Container>
  )
}
export default ConsoleInfo;