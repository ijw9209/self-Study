import React, { useState } from 'react';


function Counter() {
    //useState 상태를 관리해줌
    //호출하면 배열이반환되는데 첫번째는 현재상태 , 두번째는 setter
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;