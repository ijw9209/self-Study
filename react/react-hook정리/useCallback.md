# useCallback


```js
const memoizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },
    [a ,b],
);

```

memoized 된 콜백을 반환함

인라인 콜백과, 의존성 값의 배열을 전달하면 `useCallback`은 콜백의 memoized 된 버전을 반환함. memoized 된 버전은 콜백의 의존성이 변경되었을때만 변경됨. 
이것은 불필요한 렌더링을 방지하기 위해 쓰임 (예 `shouldComponentUpdate`를 사용하여 ) 참조의 동일성에 의존적인 최적화된 자식 컴포넌트 에 콜백을 전달할때 유용함.

`useCallback(fn, deps)`은 `useMemo(() => fn, deps)`, 와 같다.


### 예제


```js
import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );
  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

//이렇게 사용할 수 도 있다.
//   const onToggle = useMemo(
//       () => () => {
//         /* ... */
//       },
//       [users]
//   );

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;


```