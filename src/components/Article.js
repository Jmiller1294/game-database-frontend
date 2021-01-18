import React from 'react';

const Article = (props) => {
  return (
      <figure className="article">
        <a href={props.article.url}> <img className="article-img" alt="article" src={props.article.urlToImage}></img> </a>
        <figcaption class="caption"> <a href={props.article.url}> <h3>{props.article.title}</h3> </a></figcaption>
      </figure>
      
      
   
  )
}
export default Article