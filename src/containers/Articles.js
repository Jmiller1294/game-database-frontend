import React from 'react';
import styled from 'styled-components';
import Article from '../components/Article';


const ArticlesContainer = styled.div`
  width: 100%;
  height: 2000px;
  position: relative;
  padding: 10px;
`
const ArticlesHeader = styled.h2`
  text-align: center;
  color: #fff;
  margin: 25px;
  margin-bottom: 50px;
`
const ArticleList = styled.ul`
  padding: 0;
  list-style: none;
`
const ArticleItem = styled.li`
  width: 100%;
  display: inline-block;
  margin: 0 auto 0 auto;
`

const Articles = (props) => {

  return (
    <ArticlesContainer>
      <ArticlesHeader>Recent Articles</ArticlesHeader>
        <ArticleList>
          {props.articles.slice(0,15)
          .map((article, index) => (<ArticleItem key={index}><Article article={article}/></ArticleItem>))}
        </ArticleList>
    </ArticlesContainer>
  )
}

export default Articles