import React from 'react';

const Example = ({ name, color, isSpecial }) => {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            {name}
        </div>
    );
};


//props의 값이 없으면 defaultProps를 설정해서 사용하면됨 좀 유용할듯
Example.defaultProps = {
    name: '이름 없음'
}
export default Example;
