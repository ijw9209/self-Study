# Virtural DOM

React는 실제로 DOM을 제어하는 방식이아니라 중간의 가상 DOM인 Virtual DOM을 두어
개발의 편의성(DOM을 직접 제어하지는 않음)과 성능(배치 처리로 DOM 변경)을 개선했다.

Virtual DOM이 어떻게 만들어지고 관리될까?

## 1. Virtual DOM 렌더링

Virtual DOM 렌더링

Virtual DOM은 실제 DOM 구조와 비슷한 , React 객체의 트리다. 개발자는 직접 DOM을
제어하지않고 Virtual DOM을 제어하고 ,React 에서 적절하게 Virtual DOM을 DOM에 반영하는 작업을한다. 



다음과 같이 JSX 문법을 사용한 ReactDOM.render()함수를 호출하면 Virtual DOM을 만들기 시작한다.

```js
ReactDOM.render(
    <App/>
    document.getElementById('root')
)   
```

앞의 코드의 JSX문법을 변환하면 다음과 같은 코드가 만들어진다

```js
ReactDOM.render(
    React.createElement(APP)
    ,document.getElementById('root')
)
```
render() 함수를 호출할때 React.createElement(App) 객체를 파라미터로 전달하며, render()함수는 React에서 사용하는 타입의 컴포넌트를 생성한다.

이때 생성하는 컴포넌트는 주로 ReactCompositeComponent 객체와 ReactDOMComponent 객체다
ReactCompositeComponent 객체는 DOM이 아닌 컴포넌트를 생성할때 사용된다.
ReactDOMComponent 객체는 DOM을 만들때 생성하는 컴포넌트다.

render() 함수가 생성한 컴포넌트를 react 컴포넌트에 마운트하기위해 
ReactReconciler.mountComponent() 메서드를 호출한다

ReactReconciler.mountComponent() 메서드 에서는 실제 ReactCompositeComponent 객체와 
ReactDOMComponent 객체의 mountComponent() 메서드를 호출하며,
이 시점에서 주요 작업이 시작된다.

## ReactCompositeComponent 객체

+ constructor() 메서드 실행
+ componentWillMount() 메서드 실행 
+ 렌더링 실행
+ 배치 처리 작업(ReactReconcileTrans 객체)에 메서드나 속성 등록
    - componentDidMount() 메서드가 있으면 componentDidMount() 메서드 등록
    - ref 속성이 있으면 attachRef 속성 등록
+ 하위 ReactComponent 객체가 있으면 ReactComponent 객체를 생성하고 , 다시 ReactReconciler.mountComponent() 메서드를 실행    