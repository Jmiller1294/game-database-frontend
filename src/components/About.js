import React from 'react';
import '../styles/About.css';
import photo from '../assets/personal-photo.jpg';
import styled from 'styled-components';

const Description = styled.p`
  color:  white;
`

const About = () => {
  return(
    <div className="about-container">
      <img src={photo} alt="about"></img>
      <Description className="description">
        Game Database is an application created by 
        Justin Miller in 2021 that allows users to 
        access information on thousands of games 
        and consoles. It was created to give users 
        one place to get info on old and recent games.
      </Description>
    </div>
  )
}
export default About;