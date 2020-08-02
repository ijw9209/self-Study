import React, { useEffect } from 'react';

//class component 에서 componentDidMount와 componentDidwillUnmount를 hooks에서 구현하려면
//useEffect를 사용하여 구현할 수 있다.
function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log(user);
    });
    //useEffect 를 사용할 때 첫번째 파라미터에는 함수 두번째는 의존값이 들어가 있는 배열 (deps) 를 넣음,
    //만약 deps 배열을 비우게 된다면 , 컴포넌트가 처음 나타날때에만 useEffect에 등록한 ㅎ마수가 호출됨

    // 그리고 useEffect 에서는 함수를 반환할 수 있는데 이를 cleanup 함수라고 부른다. cleanup 함수는 
    // useEffect에 대한 뒷정리를 해준다고 이해하면 되는데 deps가 비어있는 경우에는 컴포넌트가 사라질때 cleanup 함수가 호출된다.

    //deps 값을 생략하면 컴포넌트가 리렌더링 될때마다 호출됨

    return (
        <div>
            <b
                style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }}
                onClick={() => onToggle(user.id)}
            >{user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle} />
            ))}
        </div>
    )
}

export default UserList;