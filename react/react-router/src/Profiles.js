import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';


// 서브라우트는 라우트내에 라우트를 만드는것을 의미
// NavLink는 Link랑 비슷한데, 만약 현재 경로 Link에서 사용하는 경로가 일치하는 경우 
// 특정 스타일을 적용 할수 있는 컴포넌트이다.
const Profiles = () => {
    return (
        <div>
            <h3>유저목록:</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/velopert"
                        activeStyle={{ background: 'black', color: 'white' }}>
                        velopert
                        </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/gildong"
                        activeStyle={{ background: 'black', color: 'white' }}>
                        gildong
                        </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>유저를 선택해주세요</div>}
            />
            <Route path="/profiles/:username" component={Profile}></Route>
            <WithRouterSample></WithRouterSample>
        </div>
    );
};

export default Profiles;