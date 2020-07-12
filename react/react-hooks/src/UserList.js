import React from 'react';

const User = ({ user }) => {
    return (
        <div>
            <b>{user.username}</b><span>{user.email}</span>
        </div>
    )
}


const UserList = () => {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@gmail.com'
        },
    ];
    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    )
}

export default UserList;