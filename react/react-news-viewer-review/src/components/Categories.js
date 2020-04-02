import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비지니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
]

const CategoriesBlock = styled.div`
    padding-bottom : 3rem;
    width: 960px;
    margin: 0 auto;
    margin-top: 1rem;

    ul{
        overflow:hidden;
        padding: 0;
        margin: 0;
    }
`;

const Category = styled(NavLink)`
    float : left;
    list-style-type : none;
    color : inherit;
    text-decoration : none;
    a {
        display: block;
        padding: 0.25rem;

        ${props =>
        props.active &&
        `font-weight: bold; color :#22eaca;`
    }
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            <ul>
                {categories.map(cate => (
                    <Category
                        key={cate.name}
                        activeClassName="active"
                        exact={cate.name === 'all'}
                        to={cate.name === 'all' ? '/' : `/${cate.name}`}
                    >
                        <a>{cate.text}</a>
                    </Category>
                ))}
            </ul>
        </CategoriesBlock>
    );
};

export default Categories;