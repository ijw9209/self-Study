import React, { useRef, useState, useMemo, useCallback } from 'react';
// import Example from './Example';
// import Counter from './Counter';
// import Wrapper from './Wrapper';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

//react에서의 style 은 background-color 처럼 하이픈(-)이 존재하는 값은 camelCase형태로 네이밍해야함
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;

    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);

  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }  
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
      email: 'public.velopert@gmail.com',
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
    setUsers(users => users.concat(user));
    //나중에 구현할 배열에 항목 추가하는 로직
    //useRef를 사용할때 파라미터를 넣어주면 이 값이 current 의 기본값이됨
    // 그리고 이 값을 수정할 때 는 current 값을 수정하면되고 조회할때는 current를 조회하면됨
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  }, []);
  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  //useCallback은 useMemo를 기반으로 만들어짐, 다만 함수를 위해서 사용 할 때 더욱 편하게 해준것 뿐이다.
  //아래와 같이 표현 할 수도 있다.
  // const onToggle = useMemo(
  //   () => () => {
  //     /* ... */
  //   },
  //   [users]
  // );
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
