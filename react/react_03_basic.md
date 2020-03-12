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
엘리먼트는 화면에 표시할 내용을 기술한다.

```js
const element = <h1>Hello, world</h1>
```

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며 쉽게 생성 가능
React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트함

### 2-1 DOM에 엘리먼트 렌더링


```js
<div id="root"></div>
```
+ 이 안에 들어가는 모든 엘리먼트를 React DOM 에서 관리하기 때문에 이것을 "root"노드 라고 부름
+ React로 구현된 애플리케이션은 일반적으로 하나의 루트 노드가 있음 
+ React 엘리먼트를 루트 DOM 노드에 렌더링 하려면  둘 다 reactDOM.render()로 전달하면됨

```js
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'))
```

### 2-2. 렌더링된 엘리먼트 업데이트하기

+ 엘리먼트를 생성한 이후 해당 엘리먼트의 자식이나 속성을 변경할 수 없다.
+ React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전에 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트함




## 3. 컴포넌트와 props

컴포넌트는 자바스크립트 함수와 유사 "props"라고 하는 임의의 입력을 받은 후 ,
화면에 어떻게 표시되는지를 기술하는 엘리먼트를 반환

### 3-1. 함수 컴포넌트와 클래스 컴포넌트

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

### 3-2. 컴포넌트 렌더링

이전까지는 React엘리먼트를 DOM태그로 나타냈음

```js
const element = <div />;
```

React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있습니다.

```js
const element = <Welcome name="Sara" />;
```

React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX어트리뷰트를 해당 컴퓨터에 단일 객체로 전달함. 이 객체를 **"props"** 라고 함

"Hello, Sara" 렌더링하기

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
```
위의 예시에서는 다음과 같은 일들이 일어난다
1. <Welcome name="Sara" /> 엘리먼트로 ReactDOM.render() 호출
2. React {name : 'Sara'}를 props를 하여 Welecome 컴포넌트를 호출
3. Welcome 컴포넌트는 결과적으로 <h1>Hello , Sara</h1> 엘리먼트를 반환
4. ReactDOM은 <h1>Hello , Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트

**주의  : 컴포넌트의 이름은 항상 대문자로 시작** 
React 는 소문자로 시작하는 컴포넌트를 DOM태그로 처리 , 
예를 들어 <div /> 는 HTML div 태그를 나타내지만 <Welcome />은 컴포넌트를 나타내며
범위 안에 Welcome 이 있어야함

### 3-3. 컴포넌트 합성

예를 들어 Welcome을 여러번 렌더링하는 App 컴포넌트를 만들수 있다

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>  
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>  
    )
}

ReactDOM.render(
    <App />
    document.getElementById('root');
);
```

### 3-4. 컴포넌트 추출

```js
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" 
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
```
이 컴포넌트는 **author**(객체) , **text**(문자열) 및 **date**(날짜)를 props로 받은 후 소셜 미디어 웹사이트의 코멘트를 나타냅니다.

이 컴포넌트는 구성요소들이 모두 중첩구조로 이루어져 있어서 변경하기 어려울 수 있으며 
각 구성요소를 개별적으로 재사용하기도 힘듬.
이컴포넌트에서 몇가지 컴포넌트를 추출하면

먼저 Avatar추출

```js
function Avatar(props) {
    return (
        <img className="Avatar"
        src={props.user.avatarurl}
        alt={props.user.name}/>
    );
}
```

Comment
```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```

다음으로 UserInfo 추출

```js
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

```

Comment

```js
function Comment(props) {
    return (
        <div className="Commnet">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div classNmae="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


```