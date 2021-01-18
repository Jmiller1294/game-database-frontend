import React from 'react';

const Info = (props) => {
  return (
      <>
        {console.log(props.location)}
        {props.location.game ?
          <div className="info-container">
            <h1>{props.location.game.name}</h1>
            <img className="cover" src={props.location.game.cover.url} alt="cover"></img>
            <div>
            {props.location.game.videos.map(video => <iframe title={video.name} src={`https://www.youtube.com/embed/${video.video_id}`} width="400" height="300" ></iframe>) }
            </div>
            
          </div>
        :
          <h1>No Game Found</h1>
        } 
    </>
  )
}
export default Info;