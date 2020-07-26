import React, { useRef, useState } from 'react';
// import Example from './Example';
// import Counter from './Counter';
// import Wrapper from './Wrapper';
// import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';


//react에서의 style 은 background-color 처럼 하이픈(-)이 존재하는 값은 camelCase형태로 네이밍해야함
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setInputs({
      ...inputs,
      [name]: value
    });
  }

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
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    //나중에 구현할 배열에 항목 추가하는 로직
    //useRef를 사용할때 파라미터를 넣어주면 이 값이 current 의 기본값이됨
    // 그리고 이 값을 수정할 때 는 current 값을 수정하면되고 조회할때는 current를 조회하면됨
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
