import React from 'react';
import styled from 'styled-components';

const ArticleBox = styled.figure`
  width: 60%;
  margin: 0 auto 0 auto;
  text-align: center;
`
const ArticleImage = styled.img`
  width: 100%;

  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }
`
const ArticleLink = styled.a`
  color: white;
`
const ArticleTitle = styled.figcaption`
  margin: 0 auto 40px auto;
  font-size: 20px;
`
const Article = (props) => {
  return (
    <ArticleBox>
      <ArticleLink href={props.article.url} target="_blank" rel="noreferrer">
        <ArticleImage alt="article" src={props.article.urlToImage}></ArticleImage>
      </ArticleLink> 
      <ArticleLink href={props.article.url} target="_blank" rel="noreferrer">
        <ArticleTitle>{props.article.title}</ArticleTitle>
      </ArticleLink>
    </ArticleBox>
  )
}
export default Article;