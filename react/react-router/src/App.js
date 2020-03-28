import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
//switch 일치하는 경로 하나만 보여주게 할 수 있다. 또한 404 페이지도 구현가능
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
        <hr />
        {/* <Link 태그를 이용하면 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않는다></Link> */}
        {/* <Route path="주소" component={보여주고싶은 컴포넌트} exact=경로가 완벽히 일치할때만가능 (/ 와 /about 가 일치하기때문에 그럴때 써주면됨) />*/}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </ul>
    </div>
  );
}

export default App;
