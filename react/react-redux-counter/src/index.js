import React from 'react';
import ReactDOM from 'react-dom';

//createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 리덕스 개발자 도구 적용
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devtools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
