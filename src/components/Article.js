import React from 'react';
import styled from 'styled-components';

const ArticleBox = styled.figure`
  width: 60%;
  margin: 0 auto 0 auto;
  text-align: center;
`
const ArticleImage = styled.img`
  width: 100%;
  
`
const Article = (props) => {
  return (
    <ArticleBox>
      <ArticleImage alt="article" src={props.article.urlToImage}></ArticleImage> 
      <figcaption> <a href={props.article.url}> <h4>{props.article.title}</h4> </a></figcaption>
    </ArticleBox>
  )
}
export default Article