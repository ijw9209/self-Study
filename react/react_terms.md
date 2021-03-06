# React 기술 용어 정리

## SPA(Single Page Application)

싱글 페이지 애플리케이션(Single-page application, SPA)는 하나의 HTML페이지와 애플리케이션 실행에 필요한 JavaScript와 CSS 같은 모든 자산을 로드하는 애플리케이션이다.
페이지 또는 후속 페이지의 상호작용은 서버로 부터 새로운 페이지를 불러오지 않으므로 페이지가 다시 로드되지 않는다.

React를 사용하여 SPA를 만들수 있지만 필수 사항은 아니다. 기존 웹사이트 일부분의 상호작용을 개선하기 위해 React를 사용할 수 있다. React로 작성된 코드는 PHP와 같은 서버에 의해 렌더된 마크업 또는 다른 클라이언트 사이드 라이브러리와 함꼐 문제없이 공존할 수 있다. 
사실 Facebook에서는 위와 같은 방식으로 React를 사용하고 있다.

## ES6, ES2015, ES2016 등

이 약어들은 모두 ECMAScript 언어 명세의 최신 버전을 나타내며, JavaScript는 이를 구현한 것이다. ES6(ES2015)에는 이전 버전에 없던 화살표 함수(arrow function), class, 템플릿 리터럴(template literal), `let`,`const` 구문과 같은 많은 추가 사항이 포함되어 있다. 특정 버전에 자세한 내용은 [여기](https://en.wikipedia.org/wiki/ECMAScript#Versions)에서 확인 할 수 있다. 


## 컴파일러

JavaScript 컴파일러(Compiler)는 JavaScript 코드를 변환하고 다른 형식으로 JavaScript 코드를 반환한다. 일반적으로 ES6문법을 구형 브라우저에서도 동작 할 수 있도록 변환하는 데 많이 사용한다. [BABEL](https://babeljs.io/)은 React와 함께 가장 널리 사용되는 컴파일러이다.

## 번들러

번들러(Bundler)는 분리된 JavaScript와 CSS 모듈 코드를 브라우저에 최적화된 여러개의 파일로 결합한다. React 애플리케이션에서 널리 사용되는 번들러에는 [Webpack](https://webpack.js.org/)과 [Browserify](http://browserify.org/)

## 패키지 관리자

패키지 관리자는 프로젝트의 종속성을 관리할 수 있는 도구이다. [npm](https://www.npmjs.com/)과 [yarn](https://yarnpkg.com/)은 React 애플리케이션에서 자주 사용되는 패키지 관리자이다. 두 패키지 관리자 모두 같은 npm 패키지 레지스트리의 클라이언트 이다.


## CDN 

CDN은 Content Delivery Network의 약자입니다. CDN은 전 세계의 서버 네트워크에서 캐시된 정적 콘텐츠를 제공한다.


## JSX

JSX는 JavaScript의 확장 문법이다. JSX는 템플릿 언어와 비슷해 보이지만, JavaScript의 강력한 기능들을 모두 사용할 수 있다. JSX는 `React.createElement()`의 호출을 통해 일반 JavaScript 객체인 "React 엘리먼트"(React element)로 컴파일 된다. JSX에 대한 기본 소개는 [여기](https://ko.reactjs.org/docs/introducing-jsx.html)에서 확인 할 수 있고 JSX에 대한 자세한 튜토리얼은 [여기](https://ko.reactjs.org/docs/jsx-in-depth.html)를 보면 된다.

React DOM은 HTML 어트리뷰트(attribute) 이름 대신 캐멀케이스(camelCase)를 네이밍 컨벤션으로 사용한다. 예를 들어 JSX에서 `tabindex`는 `tabIndex`로 작성한다. `class` 어트리뷰트는 JavaScript의 예악어 이므로 `className`으로 작성한다

```js
const name = 'Clementine';
ReactDOM.render(
    <h1 className="hello">My name is {name}!</h1>
    document.getElementById('root')
);
```


## 엘리먼트

React 엘리먼트(React Element)는 React 애플리케이션을 구성하는 블록이다. 엘리먼트는 "컴포넌트(Component)"라는 널리 알려진 개념과 혼동되기 쉽다.
엘리먼트는 화면에 보이는 것들을 기술하며, React 엘리먼트는 변경되지 않는다

```js
const element = <h1>Hello, world</h1>
```

일반적으로 엘리먼트는 직접 사용되지 않고 컴포넌트로부터 반환된다.

## 컴포넌트

React 컴포넌트는 페이지에 렌더링할 React 엘리먼트를 반환하는 작고 재사용 가능한 코드 조각이다. 가장 간단한 React 컴포넌트는 React 엘리먼터를 반환하는 일반 JavaScript 함수이다.

```js
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

```

컴포넌트는 ES6 class 로도 작성할 수 있다.

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

컴포넌트는 기능별로 나눌 수 있으며 다른 컴포넌트 안에서 사용할 수 있다. 컴포넌트는 다른 컴포넌트, 배열, 문자열 그리고 숫자를 반환할 수 있다. 화면을 구성하는 데 자주 사용되는 UI(Button, Panel, Avatar), 혹은 복잡한 UI(App, FeedStroy, Comment)컴포넌트는 재사용 가능한 컴포넌트가 될 수 있다. 컴포넌트의 이름은 항상 대문자로 시작해야한다. (`<Wrapper/>`)**(o)**  `<wrapper/>` **(x)** 컴포넌트 렌더링에 대한 자세한 내용은 [이 문서](https://ko.reactjs.org/docs/components-and-props.html#rendering-a-component)를 참고


### props 

`props`는 컴포넌트의 입력값이다. `props`는 부모 컴포넌트로 부터 자식 컴포넌트로 전달된 데이터이다.

`props`는 읽기 전용이다. `props`를 어떤 방식으로든 수정해서는 안됨

```js
//틀린 예
props.number = 42;

```

사용자의 입력 또는 네트워크 응답에 반응하여 어떤 값을 수정해야 한다면 `state`를 사용해야함

### props.children

모든 컴포넌트에서 `props,children`을 사용할 수 있다. `props.children`은 컴포넌트의 여는 태그와 닫는 태그 사이의 내용을 포함한다.

예를 들면

```js
<Welcome>Hello world!</Welcome>

```

`Hello world!` 문자열은 `Welcome` 컴포넌트의 `props.children` 으로 사용할 수 있다.

```js
function Welcom(props) {
    return <p>{props.children}</p>
}

```

Class로 정의된 컴포넌트에서는 `this.props.children`을 사용되는


```js
class Welcome extends React.Compnent { 
    render() {
        return <p>{this.props.children}</p>;
    }
}

```


### state

컴포넌트와 관련된 일부 데이터가 시간에 따라 변경될 경우 `state`가 필요함.  예를 들어 `Checkbox` 컴포넌트는 `isChecked` state가 필요할 수 있으며, `NewsFeed` 컴포넌트는 `fectedPosts`를 컴포넌트의 state를 통해 계속 주시하려고 할 수 있다.

`state`와 `props`의 가장 중요한 차이점은 `props`는 부모 컴포넌트에게 전달받은것
`state`는 컴포넌트에서 관리된다.
컴포넌트는 `props` 를 변경할 수 없지만, `state`는 변경할 수 있다.

데이터가 변경되는 각 특정한 부분에 대해, 해당 상태(state)를 소유하는 컴포넌트는 하나만 존재해야함. 
서로 다른 두 컴포넌트의 상태를 동기화하려고 하면안된다. 대신 공통 상태를 공통 조상으로 끌어올리고 해당 데이터를 두 컴포넌트에 props로 전달해라.




+ [React공식문서](https://ko.reactjs.org/docs/glossary.html)