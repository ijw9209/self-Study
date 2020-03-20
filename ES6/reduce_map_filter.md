# Reduce , map , filter


## Reduce()

```js
arr.reduce(callback[, initialValue])
//배열.reduce((누적값 , 현재값 , 인덱스 , 요소) => {return 결과},초기값)
```
1. 매개변수
    + callback 배열의 각 요소에 대해 실행할 함수. 다음 네가지 인수를 받음 
        - accumulator : 콜백의 반환값을 누적
        - currentValue : 처리할 현재 요소
        - currentIndex : 처리할 현재 요소의 인덱스
        - array : reduce()를 호출한 배열
    + initialValue
        callback의 최초 호출에서 첫번째 인수에 제공하는 값, 초기값을 제공하지 않으면 첫 번째 요소 사용, 빈 배열에서 초기값없이 reduce()를 호출하면 오류발생    
2. 리턴
 누적 계산의 결과 값

```js
arr = [0,1,2,3,4];
arr.reduce(function(acc , cur , curIdx, array)){
    console.log(acc , cur , curIdx , array);
    return acc + cur;
}, 10);

// 10 0 0 (5) [0, 1, 2, 3, 4]
// 10 1 1 (5) [0, 1, 2, 3, 4]
// 11 2 2 (5) [0, 1, 2, 3, 4]
// 13 3 3 (5) [0, 1, 2, 3, 4]
// 16 4 4 (5) [0, 1, 2, 3, 4]


//화살표 함수도 가능
arr.reduce((acc , cur) => acc + cur, 0);
```