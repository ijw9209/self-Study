# 실행 컨텍스트 (Execution Context)


## 실행 컨텍스트

ECMA를 보면 제어가 실행코드를 만나면 실행콘텍스트로 들어간다.
여러개의 **실행콘텍스트는 논리적으로 스택의 형태를 구성**한다.

실행 콘텍스트로 제어가 이동하면 스코프 체인 생성, 변수를 초기화하고 THIS값을 결정한다. **실행 콘텍스트에 전달한 코드의 종류**에 따라 세부 과정이 다르다.

코드의 종류
+ 전역코드(Global code) : 프로그램이 최초에 실행하는 소스텍스트
+ Eval 코드(Eval code) : 함수 몸체의 부분으로 해석할 수 있는 소스 텍스트
+ 함수 코드(Function code) : 내장 eval 함수에 넘겨진 소스 텍스트

## Execution Context란?

실행콘텍스트 , 실행 문맥이라고도 함
ESMA에 정의된 추상적인 개념으로 **코드가 실행되는 환경**을 의미

모든 자바스크립트 코드는 실행 콘텍스트안에서 돌아감

Controll이 ECMAScript 코드를 만나면 **실행 콘텍스트**를 생성한다.

- Controll : 인터프리터의 실행흐름

생성한 실행 콘텍스트는 논리적으로 **스택**의 형태를 구성 (LIFO방식) 

실행 콘텍스트는 스코프체인생성 , 변수 초기화 , this값을 결정한다.

초기화 과정은 실행코드 종류에따라 다르다.

### 전역 코드(Global code)

+ 전역코드는 프로그램 수준에서 실행
+ js파일을 로딩하거나 지역 인라인 코드를 만났을 때 javascript엔진이 최초로 읽어들이는 코드
+ 처음 시작시, 실행 콘텍스트 스택에는 오직 전역 콘텍스트만 존재

전역 코드의 범위

```js
var sayHello = 'Hello';

// function person() {
//     var first = 'David';
//     var last = 'vava'

//     function getFirstName(){
//         return first;
//     }
//     function getLastName(){
//         return last;
//     }

//     alert( sayHello = getFirstName() + " " +getLastName());
// }
person();

```
함수 몸체 안의 코드(주석친 부분)은 전역 코드에 포함되지않는다

### 함수 코드(Function code)

함수 실행 코드를 만나면 새로운 실행 콘텍스트를 생성하여 ECStack에 넣는다
그리고 함수가 실행이 끝나면 스택에서 소멸된다.
&nbsp;&nbsp;&nbsp;&nbsp;stack

    |getFirstName 함수 실행 컨텍스트|
    |person함수실행컨텍스트|
    |전역컨텍스트|


```js
var sayHello = 'Hello';

function person() {
    var first = 'David';
    var last = 'vava'

    function getFirstName(){
        return first;
    }
    function getLastName(){
        return last;
    }

    alert( sayHello = getFirstName() + " " +getLastName());
}
person();

```
함수 내부 중첩 함수의 코드는 함수 코드에 포함되지 않음

