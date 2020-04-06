//액션 : 상태변화를 일으킬때 참조하는 객체

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수 정의
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 초기 상태 정의
const initialState = {
    number: 0
};

//리듀서 : 상태에 변화를 일으키는 함수 파라미터 두개 ( 현재상태 , 액션 객체)
export default function Counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            }
        default:
            return state;
    }
}