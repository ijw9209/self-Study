import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Post } from 'pages';

const Posts = ({ match, location }) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)}></Route>
            {/* id가 주어지지 않았을때 */}
            <Route path={`${match.url}/:id`} component={Post}></Route>
            {/* 라우트 주소에 :id가 붙었을때  */}

            <p>location.pathname : {location.pathname}</p>
            <p>match.path : {match.path}</p>
            <p>match.url : {match.url}</p>
        </div>
    );
};

export default Posts;