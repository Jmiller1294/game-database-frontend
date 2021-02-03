import React from 'react';

const Info = (props) => {
  return (
      <>
        {console.log(props.location)}
        {props.location.game ?
          <div className="info-container">
            <h1 className="game-title">{props.location.game.name}</h1>
            <img className="cover" src={props.location.game.cover.url} alt="cover"></img>
            <p className="game-rating">Game Rating: {Math.floor(props.location.game.rating)}/100</p>
            <h3>Platforms</h3>
            <ul className="platform-list">{props.location.game.platforms.map(platform => <li key={platform.id}>{platform.name}</li>)}</ul>
            <h3>Videos</h3>
            <div className="video-container">
            {props.location.game.videos.slice(0,4).map(video => <iframe className="" key={video.id} title={video.name} src={`https://www.youtube.com/embed/${video.video_id}`} width="360" height="300" ></iframe>) }
            </div>
            <h3>Screenshots</h3>
            <div className="screenshot-container">
              {props.location.game.screenshots.map(screenshot => <img className="screenshot" src={screenshot.url} alt="screenshot"></img>)}
            </div> 
            <h3>Similar Games</h3>
            <div className="similar-games-container">
              {props.location.game.similar_games.map(game => <img className="similar-game" src={game.cover.url} alt="similar games"></img>)}
            </div>
          </div>
        :
          <h1>No Game Found</h1>
        } 
    </>
  )
}
export default Info;