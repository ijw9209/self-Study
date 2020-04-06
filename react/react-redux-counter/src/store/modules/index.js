import { combineReducers } from 'redux';
import counter from './counter';

// 리듀서 합치기 combineReducers를 사용하여 리듀서를 합친다
export default combineReducers({
    counter,
    // 다른 리듀서를 만들게 되면 여기에 import
});