import React from 'react';
import Article from '../components/Article';
import '../styles/Articles.css';

const Articles = (props) => {

  return (
  <> 
    <div className="articles-container">
      <h2 className="articles-header">Recent Articles</h2>
      {props.articles.map((article, index) => (<Article key={index} article={article} />))}
    </div>
  </>
  )
}
export default Articles