 ## 1.스코프란 ?

유효범위(Scope)는 변수의 수명을 의미한다

```js
var vscope = 'global';
function fscope(){
    alert(vscope);
}
fscope();   //global이 반환
```

전역변수 : 애플리케이션 전역에서 접근이 가능한 변수다. 어떤 함수 안에서도 그 변수에 접근 할 수있다.

```js
var vscope = 'global';
function fscope() {
    var vscope = 'local';
    alert('함수안 ' + vscope);  // local
}
fscope();
alert('함수밖 ' + vscope);  //global

```

지역변수의 유효범위는 함수 안이고 , 전역변수의 유효범위는 애플리케이션 전역인데,

같은 이름의 지역변수와 전역변수가 동시에 정의되어 있다면 지역변수가 우선한다는것을 알 수 있다.

```js
var vscope = 'global';
function fscope() {
    vscope = 'local';
    alert('함수안' + vscope);   //local
}
fscope();
alert('함수밖'+ vscope);    //local
```

함수 밖에서도 vscope의 값이 local인 이유는? 그것은 fscope 함수 안에 지역변수를 선언할 때

var를 사용하지 않았기 때문이다. **var를 사용하지 않은 변수는 전역변수가 된다**

전역변수는 사용하지 않는것이 좋다. 여러가지 이유로 그 값이 변할수 있기 때문이다

그래서 변수를 선언할 때는 꼭 var를 붙이는것을 습관화 해야한다.

전역변수를 사용하고자한다면 그것을 사용하는 이유를 명확히 알고 있을때 사용하자.

## 2. 스코프의 필요성

지역변수의 사용

```js
function a () {
    var i = 0;
}
for(var i = 0; i < 5; i++){
    a();
    document.write(i);  //01234 
}

```

전역변수의 사용

```js
function a () {
    i = 0;
}
for(var i = 0; i< 5; i++){
    a();
    document.write(i);
}
//무한반복됨 i가 계속 0으로 초기화가되서
```

## 3. 언제 전역변수를 사용할까?

전역변수의 사용


```js
var MYAPP = {}      //전역변수 
MYAPP.calculator = {
    'left' : null,
    'right' : null  
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

document.write(sum()); // 30
```

전역변수'하나'를 생성하고 그 전역변수 객체 안에다가 다른변수를 넣을떄 변수이름 충돌할 가능성이 낮아지게된다


### 3-1 전역변수 '하나'조차도 사용하고싶지 않을때

**익명함수 : 함수를 정의하고 바로호출하는 기법**

```js
(function(){
    var MYAPP = {}      // 지역변수
MYAPP.calculator = {
    'left' : null,
    'right' : null  
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

document.write(sum()); // 30
}())

```
전체를 function으로감싸주고 > 맨뒤에 () 붙이면 바로호출이란의미 > 또 그것을 괄호로 감싸주면


## 4. 스코프의 대상 (함수)


```js
for(var i = 0; i < 1; i++){
    var name = 'cording everybody';
}
alert(name);    // cording everybody

```

**자바스크립트의 지역변수는 함수에서만 유효**

## 5. 정적 유효범위

자바스크립트는 **함수가 선언된 시점에서의 유효범위**를 갖는다. 
이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다. 

```js
var i = 5;

function a() {
    var i = 10;
    b();
}

function b() {
    document.write(i);  //지역변수를 찾고 없으면 전역변수를 찾게됨
}

a();    
```

실행결과는 5이다.