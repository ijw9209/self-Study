import React, { Component } from 'react';

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