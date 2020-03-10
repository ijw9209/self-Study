# React 기본 개념

## 1. Hello World

Hello , world 출력하기

```js
ReactDom.render(
    <h1>Hello, world</h1>
    document.getELementById('root')
);

```
## 2. 엘리먼트 렌더링

엘리먼트는 React앱의 가장 작은 단위

엘리먼트는 화면에 표시할 내용을 기술합니다

```js
const element = <h1>Hello, world</h1>
```

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며 쉽게 생성 가능
엘리먼트와 컴포넌트를 혼동하기쉽다 
엘리먼트는 "컴포넌트"의 구성요소

### 2-1 DOM에 엘리먼트 렌더링

HTML 파일 어딘가에 <div>가 있다고 가정하면
```js
<div id="root"></div>
```

이 안에 들어가는 모든 엘리먼트를 React DOM 에서 관리하기 때문에 이것을 "root"노드 라고 부름

React로 구현된 애플리케이션은 일반적으로 하나의 루트 노드가 있음 
React 엘리먼트를 루트 DOM 노드에 렌더링 하려면  둘 다 reactDOM.render()로 전달하면됨

```js
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'))
```

## 3. 컴포넌트와 props

컴포넌트는 자바스크립트 함수와 유사 "props"라고 하는 임의의 입력을 받은 후 ,
화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환

## 3-1. 함수 컴포넌트와 클래스 컴포넌트

컴포넌트를 정의하는 가장 간단한 방법은 자바스크립트 함수를 작성하는것

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

```

이 함수는 데이터를 가진 하나의 "props" 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트 
이러한 컴포넌트는 자바스크립트 함수이기 때문에 말 그대로 "함수 컴포넌트"라고 호칭

또한 ES6 class를 사용하여 컴포넌트를 정의할 수 있음

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```

React의 관점에서 볼 때 위 두 가지 유형의 컴포넌트는 동일합니다.
