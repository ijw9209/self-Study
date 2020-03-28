import React from 'react';

const profileData = {
    son: {
        name: '손흥민',
        description: '토트넘 공격수'
    },
    hong: {
        name: '홍길동',
        description: '전래동화의 주인공'
    }
}
// 파라미터와, 쿼리 언제 사용해야하는 규칙은 없지만 파라미터는 특정 id 또는 이름
// 쿼리는 어떤 키워드를 검색하거나 요청에 필요한 옵션을 전달할때 사용

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;