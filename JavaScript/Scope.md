 ## 1.스코프란 ?


스코프를 정의해보면 변수가 영향을 미치는 범위 혹은 변수의 유효범위 라고 할 수 있다.

```js
var a = 10;
function scope1() {
    a = 20;
    console.log(a); //20
}
scope1();
console.log(a); //20

var b = 10;
function scope2() {
    var b = 20;
    console.log(b); //20
}
scope2();
console.log(b); // 10

```


스코프를 깊게 체감하기위해서는 console.log의 입장해서 생각해봐야된다.

## 2. 블록 스코프와 함수 스코프

블록 스코프 : 중괄호{}로 감싸진 범위(if의 블록 {} , for의 블록 {}, function의 블록 {})
함수 스코프 : 블록스코프중 function의 블록 {} 범위를 갖는 스코프 

var 는 **함수스코프**내에서 유효함
let,const는 **블록스코프**내에서 유효하다.

## 3. 어떤 스코프를 참조할지 어떻게 판단할까?

js 코드가 컴파일 되는 과정을 거치면 , 코드(token)가 렉싱되고 스코프에 변수목록 을 작성한다. 

1. 렉싱

![image](https://t1.daumcdn.net/cfile/tistory/99D5F8435D25FDCF29)

우선 이코드에선 , 코드가 컴퓨터 입장에서 의미있는 조각(token)으로 나눠짐

2. 스코프생성

다음은 이 조각에 근거하여 컴파일러가 파싱,코드 생성을 수행하고 , 스코프가 변수 목록을 작성


![image2](https://t1.daumcdn.net/cfile/tistory/9927B33A5D25FFC905)


scope1과 scope2를 비교해보면 var 키워드가 있을때 스코프 영역에 목록이 생성됨

이렇게 실행 준비를 마치고 엔진에 의해 실행

3. scope1 , scope2 함수 내 a, b 할당이 일어남

![image3](https://t1.daumcdn.net/cfile/tistory/99C4CC4B5D26064E04)

console.log가 실행되기전 상황

변수 a, b는 **LHS 탐색에 의해 가까운 스코프 내에 변수에 할당**

scope1 함수가 실행될때 scope1 스코프 내에는 a 라는 변수가 없으므로 글로벌 스코프에서 변수 a를 찾기 시작함

반대로 scope2 함수가 실행될 때 , scope2 스코프 내에는 b라는 변수가 있으므로 , 자신에 스코프에 있는 b의 값을 할당 


4. console.log에서 각 변수를 참조

![image4](https://t1.daumcdn.net/cfile/tistory/99637D505D26071E2A)

scope1 함수의 console.log가 실행되면 RHS검색을 통해 a를 찾게됨 .
하지만 scope1 스코프에서 변수를 찾지못하여 글로벌 스코프 영역에서 변수 a 를 찾음

글로벌 스코프에서 실행된 console.log는 당연하게도 자신의 스코프에있는 변수 a를 찾음

## 4. var 와 let의 스코프차이

var : **function-scoped**
let , const : **block-scoped**

**함수 레벨 스코프(Function-level scope)**
함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.

**블록 레벨 스코프(Block-level scope)**
모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등) 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다. 즉, 코드 블록 내부에서 선언한 변수는 지역 변수이다.


```js
var foo = 123 // 전역변수 

console.log(foo)   // 123 

{
    var foo = 456;  // 전역변수
}

console.log(foo); // 456

```

블록 레벨 스코프를 따르지 않는 var 키워드의 특성 상 , 코드 블록 내의 변수 foo는 전역 변수이다 그런데 이미 전역변수 foo가 선언되어 있다.

var 키워드를 사용하여 선언한 변수는 중복 선언이 허용되므로 위의 코드는 문제가없다

단 foo는 전역변수이기 때문에 전역에서 선언된 전역변수 foo의 값 123을 456으로 재할당

ES6는 **블록레벨 스코프**를 따르는 변수를 선언하기 위해 let 키워드를 제공함

```js
let foo = 123;  // 전역변수

{
    let foo = 456;
    let bar = 456;
}
console.log(foo) // 123
console.log(bar) // // ReferenceError: bar is not defined

``` 

let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다. 위 예제에서 코드 블록 내에 선언된 변수 foo는 블록 레벨 스코프를 갖는 지역 변수이다. 전역에서 선언된 변수 foo와는 다른 별개의 변수이다. 또한 변수 bar도 블록 레벨 스코프를 갖는 지역 변수이다. 따라서 전역에서는 변수 bar를 참조할 수 없다.