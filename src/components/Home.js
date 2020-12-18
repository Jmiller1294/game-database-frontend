import React from 'react';
import '../Home.css'
import background from '../assets/homepage-background.jpg'


const Home = () => {
    
    return(
        <div className="home"style={{ 
        backgroundImage: `url(${background})` 
        }}>
        <h1>Home: hello</h1>
            status: add in props verify logged in
        </div>
    )
}
export default Home;