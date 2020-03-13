# State and lifeCycle

## 함수에서 클래스로 변환하기

```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```


```js
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

이렇게하면 clock는 함수가 아닌 클래스로 정의됩니다.

render 메서드는 업데이트가 발생할 때마다 호출되지만, 같은 DOM 노드로
<Clock />을 렌더링하는경우 Clock클래스의 단일 인스턴스만 사용됩니다.
이것은 로컬 state와 생명주기 메서드와 같은 부가적인 기능을 사용할 수있게 해줍니다.

## 클래스에 로컬 state 추가하기

1. render() 메서드 안에있는 this.props.date를 this.state.date로 변경
```js
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

```

2.초기 this.state를 지정하는 class constructor를 추가
```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() { 
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

```

3. <Clock/> 요소에서 date prop를 삭제합니다

```js
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

```

전체코드

```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    )    

```

이제 Clock이 스스로 타이머를 설정하고 매초 스스로 업데이트하도록 하겠습니다

## 생명주기 메서드를 클래스에 추가하기

Clock이 처음 DOM에 렌더링 될때마다 타이머를 설정
또한 Clock에 의해 생성된 DOM이 삭제될때마다 타이머를 해제

컴포넌트 클래스에서 특별한 메서드를 선언하여 컴포넌트가 마운트되거나 언마운트 될때 일부 코드를 작동할 수 있습니다


```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

```
이러한 메서드들을 "생명주기 메서드"라고 불립니다.

**componentDidMount()** 메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다
이 장소가 타이머를 설정하기에 좋은장소입니다.

```js
componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
```

this(this.timerID) 에서 어떻게 타이머 ID를 저장하는지 주의하세요

this.props가 React에 의해 스스로 설정되고 this.state가 특수한 의미가 있지만,
타이머ID와 같이 데이터 흐름안에 포함되지않는 어떤 항목을 보관할 필요가 있다면 자유롭게 클래스에 수동으로 부가적인 필드를 추가해도 됩니다.

**componentWillUnmount()** 생명주기 메서드 안에 있는 타이머를 분해해보겠습니다.

```js
componentWillUnmount() {
    clearInterval(this.timerID);
}
```

마지막으로 Clock 컴포넌트가 매초 작동하도록 하는 tick() 이라는 메서드를 구현해보겠습니다.

이것은 컴포넌트 로컬 state를 업데이트하기 위해 **this.setState()**를 사용합니다

```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date : new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimerString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

```

상황순서 

1. render() 에서 Clock 생성자 호출 > this.state 초기화
2. render() 메서드 호출 Clock의 렌더링 출력값을 일치시키기위해 DOM업데이트
3. Clock 출력값이 DOM에 삽입되면 , componentDidMount() 메서드 호출 > tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청
4. 매초 브라우저가 tick() 메서드 호출, 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체 호출하며 > setState() 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시호출 > render() 메서드 안의 this.state.date가 달라지고 렌더링출력값은 업데이트된 시각을 포함
5. 컴포넌트가 DOM으로부터 한번이라도 삭제된적이 있다면 react는 타이머를 멈추기위해
  **componentWillUnmount()** 메서드 호출


## state를 올바르게 사용하기

**setState()** 에 대해 알아야할것

+ 직접 State를 수정하면안됨

예를 들이 이 코드는 컴포넌트를 다시 렌더링 하지않음

```js
// Wrong
this.state.comment = 'Hello';
```

대신에 **setState()**를 사용

```js
// Correct
this.setState({comment:'Hello'});
```

**this.state**를 지정할 수 있는 유일한 공간은 constructor

## State 업데이트는 비동기적일 수도 있습니다.

React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리가능

this.props와 this.state가 비동기적으로 업데이트 될 수있기때문에 

예를들어 다음코드는 카운터 업데이트에 실패할수있음

```js
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment
})

```

객체보다는 함수를 인자로 사용하는 다른 형태의 setState()를 사용.
그함수는 이전 state를 첫번째 인자로 받아들일것이고 , 업데이트가 적용된 시점에 props를
두번째 인자로 받아들임

```js
//Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}))

```
화살표함수도 되고 , 일반적인 함수에서도 정상적으로 작동함

```js
//Correct
this.setState(function(state, props){
    return {
        counter: state.counter + props.increment
    };
});

```

## state 업데이틑 병합됨

**setState()** 를 호출할때 React는 제공한 객체를 현재 state로 병합합니다.

예를 들어 , state는 다양한 독립적인 변수를 포함할 수 있습니다.

```js
constructor(props) {
    super(props);
    this.state = {
        post: [],
        comments:[]
    }
}

```

별도의 **setState()** 호출로 이러한 변수를 독립적으로 업데이트 할 수 있습니다.

```js
componentDidMount() {
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });
    });

    fetchComments().then(response =>{
        this.setState({
            comments: response.comments
        });
    });
}



```