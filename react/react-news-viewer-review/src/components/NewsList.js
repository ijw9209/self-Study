import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsItemBlock = styled.div`
    padding-bottom : 3rem;
    width:960px;
    margin: 0 auto;

`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}


class NewsList extends Component {
    render() {
        return (
            <NewsItemBlock>
                <NewsItem article={sampleArticle} />
                <NewsItem article={sampleArticle} />
                <NewsItem article={sampleArticle} />
                <NewsItem article={sampleArticle} />
                <NewsItem article={sampleArticle} />
                <NewsItem article={sampleArticle} />
            </NewsItemBlock>
        )
    }
}

export default NewsList;