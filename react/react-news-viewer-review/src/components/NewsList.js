import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsItemBlock = styled.div`
    padding-bottom : 3rem;
    width:960px;
    margin: 0 auto;
`;


class NewsList extends Component {
    state = {
        loading: false,
        articles: null
    };

    loadData = async () => {
        try {
            this.setState({
                loading: true
            });
            const { category } = this.props;
            const query = category === 'all' ? '' : `&category=${category}`;
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7eaede05f65e4002b165f0f65e1a0c47`);
            this.setState({
                articles: response.data.articles
            })
        } catch (e) {
            console.log(e);
        }

        this.setState({
            loading: false
        })
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.category !== this.props.category) this.loadData();
    }

    render() {
        const { articles, loading } = this.state;
        if (!articles || loading) return <NewsItemBlock>로딩중..</NewsItemBlock>
        return (
            <NewsItemBlock>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article}></NewsItem>
                ))}
            </NewsItemBlock>
        )
    }
}

export default NewsList;