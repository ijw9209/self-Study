# JSX 

## 1. JSX란?

Javascript + XML을 합쳐서 탄생한 기존 자바스크립트의 확장 문법
JSX는 React "엘리먼트"를 생성

React에서는 이벤트가 처리되는 방식 , 시간에 따라 state가 변하는 방식 , 화면에 표시하기 위해 데이터가 준비되는 방식 등 렌더링 로직이 본질적으로 다른 UI로직과 연결된다는 사실을 받아들여야한다.

간단히 말하면 JSX는 자바스크립트에 마크업코드를 작성하는것


## 2.주의할점과 사용법
### 2-1. 태그는 꼭 닫혀있어야한다.
### 2-2. 두개이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야한다.


예시)
```js
import React , { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
            <div>
                Bye
            </div>        
        )   
    }
}

```
이러면 안됨

```js
import React , { Component } from 'react';

class App extends Component {
    render() {
        return (
        <div>    
            <div>
                Hello
            </div>
            <div>
                Bye
            </div>        
        </div>    
        )   
    }
}

```
이렇게 div 태그나 Fragment 태그같은것으로 감싸야함

### 2-3. JSX 안에 자바스크립트 값 사용하기

JSX 내부에서 자바스크립트 값을 사용 할 땐 이렇게 할 수 있습니다.

```js
import React , { Component } from 'react';

class App extends Component {
    render() {
        const name = 'react';
        return (
            <div>
                Hello {name}!
            </div>    
        )
    }
}
```
### 2-4. style 과 className

JSX 에서 style 과 CSS 클래스를 설정 할 때, html 에서 하는 것과 사뭇 다릅니다.

우선, 스타일은 다음과 같이 작성 할 수 있습니다.

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }
}

export default App;
```

리액트에서는 객체 형태로 작성해야함.
리액트에서는 클래스 설정시 className="" 을 써야함


```css
.App {
  background: black;
  color: aqua;
  font-size: 36px;
  padding: 1rem;
  font-weight: 600;
}

```
```js
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        리액트
      </div>
    );
  }
}

export default App;

```

### 2-5. 주석

주석작성법

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* 주석은 이렇게 */}
        <h1
          // 태그 사이에
        >리액트</h1>
      </div>
    );
  }
}

export default App;
```