import React from 'react';
import { withRouter } from 'react-router-dom';


//withRouter HOC는 라우트 컴포넌트가 아닌곳에서 match , location , history를 사용해야 
//할 때 사용한다
const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)}></textarea>
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} />
            <button onClick={() => history.push("/")}>홈으로</button>
        </div>
    );
};

export default WithRouterSample;