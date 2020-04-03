//createContext를 import 해줍
//store의 저장소인 Provider, 즉 <Context.Provider>를 만들기 위해 Context를 만듬
import { CreateContent } from 'react';

//사실 여기 안에있는 데이터는 삭제해도 됩니다.
//왜냐면 ColorContext.Provider에서 state를 관리 할 거라서요.
//하지만 관리할 state가 무엇이 있는지 확인하기 좋습니다.
//그러기에 지우지 않는것을 추천합니다.
const ColorContext = createContext({

    number: 0,
    increase: () => { },
    decrease: () => { }

});

export default ColorContext;