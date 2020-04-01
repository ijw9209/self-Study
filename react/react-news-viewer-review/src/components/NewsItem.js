import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    margin-bottom : 2rem;
    overflow: hidden;
    border : 1px solid black;

    .thumbnail {
        margin-right: 1rem;
        float : left;
        width : 160px;
        height : 100px;
        background-image : url(${props => props.urlToImage});
        background-position : center;
        background-size : cover;
        background-repeat : no-repeat;
        border : 1px solid black;
    }

    .contents {
        .title {
            margin-top : 0.5rem;
            margin-bottom : 1rem;
            border : 1px solid blue;
        }

        a {
            color : inherit;
            text-decoration : none;
            border : 1px solid blue;
        }
    }

    .description {
        line-height : 1.3;
    }


`;

const NewsItem = ({ article }) => {

    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock urlToImage={urlToImage} color="blue" >
            {urlToImage && <div className="thumbnail" />}
            <div className="contents">
                <h3 className="title">
                    <a hrer={url}>{title}</a>
                </h3>
                <div className="description">{description}</div>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;