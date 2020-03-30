import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그 발생!'));
    return (
        <div>

        </div>
    )
}


class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidCatch(error, info) {
        //에러를 잡을수 있다.
        this.setState({
            error: true
        });
    }

    componentDidMount() {
        // 컴포넌트가 화면에 나타나면 호출됨
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 변화가 발생하는 부분을 감지하여 렌더를 막을수있다.
        // return false 하면 업데이트를 안함
        // return this.props.checked !== nextProps.checked
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        //render를 호출하고 난뒤 호출됨
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        console.log('render호출!')

        if (this.state.error) return (<h1>에러발생!</h1>)
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 && <Problematic></Problematic>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;