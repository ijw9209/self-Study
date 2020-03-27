import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search.substr(1));
    const detail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>About 컴포넌트 입니다.</p>
            {detail && <p>추가적인 정보</p>}
        </div>
    );
};

export default About;