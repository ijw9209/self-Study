import React, { Component } from 'react';


// 라우트로 사용된 컴포넌트는 match, location을 props로 전달받고,
// history도 props중 하나
// history 객체를 이용하면 컴포넌트 내에 구현하는 메소드를 라우터에서 직접접근가능
// 뒤로가기 , 경로이탈
class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleGoHome = () => {
        this.props.history.push('/home');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠나실 건가요?')
    }

    componentWillMount() {
        // 컴포넌트가 언마운트 되면 , 그만 물음
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;