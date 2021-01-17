import React from 'react';

const Article = (props) => {
  return (
    <div className="article">
      <h3 className="article-title">{props.article.title}</h3>
      <img className="article-img" alt="article" src={props.article.urlToImage}></img>
    </div>
  )
}
export default Article