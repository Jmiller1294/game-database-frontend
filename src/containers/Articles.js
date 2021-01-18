import React from 'react';
import Article from '../components/Article';
import '../styles/Articles.css';

const Articles = (props) => {

  return (
  <> 
    <div className="articles-container">
      <h2 className="articles-header">Recent Articles</h2>
      {console.log(props.articles)}
      {props.articles.map(article => (<Article key={article.id} article={article} />))}
    </div>
  </>
  )
}
export default Articles