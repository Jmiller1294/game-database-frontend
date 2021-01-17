import React from 'react';

const Article = (props) => {
  return (
    <div className="article">
      <a href={props.article.url}><h3 className="article-title">{props.article.title}</h3></a>
      <img className="article-img" alt="article" src={props.article.urlToImage}></img>
    </div>
  )
}
export default Article