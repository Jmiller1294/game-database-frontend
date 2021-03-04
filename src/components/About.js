import React from 'react';
import '../styles/About.css'
import photo from '../assets/personal-photo.jpg'

const About = () => {
  return(
    <div className="about-container">
      <img src={photo} alt="about picture"></img>
      <p className="description">
        Game Database is an application created by 
        Justin Miller in 2021 that allows users to 
        access information on thousands of games 
        and consoles. It was created to give users 
        one place to get info on old and recent games.
      </p>
    </div>
  )
}
export default About;