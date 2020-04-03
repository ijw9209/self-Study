import React, { Component } from 'react';

const ThemeContext = React.createContext('light');

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider theme="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  // Toolbar 컴포넌트는 불필요한 테마 prop를 받아서
  // ThemeButton에 전달해야 합니다.
  // 앱 안의 모든 버튼이 테마를 알아야 한다면
  // 이 정보를 일일이 넘기는 과정은 매우 곤혹스러울 수 있습니다.
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />
  }
}
export default App;