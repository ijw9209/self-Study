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