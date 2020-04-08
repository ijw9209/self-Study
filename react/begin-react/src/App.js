import React, { useRef } from 'react';
import UserList from './UserList';
import './App.css';


//useref Hook은 DOM을 선택하는 용도외에도 컴포넌트안에서 조회 및 수정할수있는 
//변수를 관리 할 수 있다.
// 이러한 값들을 관리 할 수 있다.
// setTimeout, setInterval 을 통해서 만들어진 id
// 외부 라이브러리를 사용하여 생성된 인스턴스
// scroll 위치

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'test',
      email: 'tttt@gmail.com'
    },
    {
      id: 3,
      username: 'test2',
      email: 'test@gmail.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  return <UserList users={users} />
}

export default App;
