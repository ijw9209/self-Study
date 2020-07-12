import React, { useState, useRef } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs;     // 비 구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    };
    return (
        <div>
            <input
                ref={nameInput}
                value={name}
                onChange={onChange}
                name="name"
                placeholder="이름" />
            <input
                value={nickname}
                onChange={onChange}
                name="nickname"
                placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} : {nickname}
            </div>
        </div>
    )
}

export default InputSample;