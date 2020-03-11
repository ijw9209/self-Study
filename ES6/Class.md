# ES6 Class

자바스크립트는 프로토타입 기반 객체지향 언어다. 논쟁이 있긴 하지만 강력한 객체지향 프로그래밍 능력을 지니고 있다.

프로토타입 기반 프로그래밍은 클래스가(class-free) 객체지향 프로그래밍 스타일로 프로토타입 체인과 , 클로저 등으로 객체지향 언어의 상속, 캡슐화(정보 은닉) 등의 개념을 구현할 수 있다.

+ Javascript Object-Oriented Programming

ES5에서는 생성자 함수와 프로토타입 , 클로저를 사용하여 객체 지향 프로그래밍을 구현했다

```js

//ES5
var Person = (function () {
    //Constructor
    function Person(name) {
        this._name = name;
    }

    //public method
    Person.prototype.sayHi = function() {
        console.log('Hi! ' + this._name); 
    };

    //return constructor
    return Person;

}());

var me = new Person('Lee')
me.sayHi(); // Hi! Lee.

console.log(me instanceof Person); // true

//instanceof 연산자는 : 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별

```

하지만 클래스 기반 언어에 익숙한 프로그래머들은 프로토타입 기반 프로그래밍 방식이 혼란스러울 수 있으며 자바스크립트를 어렵게 느끼게하는 하나의 장벽처럼 인식되었다.

ES6의 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 클래스 기반 언어에 익숙한 프로그래머가 빠르게 학습할 수 있다. 


## 1. 클래스 정의 (Clss Definition)

Class는 사실 함수이다.  함수를 함수표현식과 함수 선언으로 정의 할 수 있듯이 class문법도 **class 표현식**과 **class 선언** 두 가지 방법을 제공

### 1-1 class 선언

class를 정의하는 한 가지 방법은 class선언을 이용 하는것 
class를 선언하기 위해서는 클래스의 이름과 함께 class 키워드를 사용해야함

```js

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

```

### 1-2 . Hoisting

**함수 선언**과 **클래스 선언**의 중요한 차이점은 함수 선언의 경우 **호이스팅**이 일어나지만, 클래스 선언은 그렇지 않음

클래스를 사용하기 위해서는 클래스를 먼저 선언해야하며 , 그렇지않으면 아래의 코드같이 
ReferenceError 에러를 던질것이다

```js

const p = new Rectangle(); //Reference Error
class Rectangle {}

```