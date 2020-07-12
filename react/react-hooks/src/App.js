import React from 'react';
// import Example from './Example';
// import Counter from './Counter';
import Wrapper from './Wrapper';
// import InputSample from './InputSample';
import UserList from './UserList';


//react에서의 style 은 background-color 처럼 하이픈(-)이 존재하는 값은 camelCase형태로 네이밍해야함
function App() {
  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }


  return (
    <Wrapper>
      {/* <Example name="react" color="red" isSpecial />
      <Example color="pink" />
      <div style={style} >{name}</div>
      <hr />
      <Counter /> */}
      {/* <InputSample /> */}
      <UserList />
    </Wrapper>
  );
}

export default App;
