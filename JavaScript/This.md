# this


 자바스크립트의 함수는 호출될 때 , 매개변수로 전달되는 인자값 이외에 , arguments 객체와 **this**를 암묵적으로 전달받는다.

```
funcstion square(number) {
    console.log(arguments);
    console.log(this);

    return number * number;
}

square(2);

```
 자바스크립트의 **this** keyword는 Java와 같은 익숙한 언어의 개념과 달라 개발자에게 혼란을 준다

 Java에서의 this는 인스턴스 자신(self)을 가리키는 참조변수 이다. this가 객체 자신에 대한 참조값을 가지고 있다는 뜻이다. 주로 매개변수와 객체 자신이 가지고있는 멤버변수명이 같을경우 이를 구분하기 위해서 사용된다. 아래 Java 코드의 생성자 함수 내의 this.name은 멤버변수를 의미하며 name은 생성자 함수가 전달받은 매개변수를 의미한다

 ```
public Class Person {

    private String name;

    public Person(String name) {
        this.name = name;
    }
}

 ```

 하지만 자바스크립트의 경우 Java와 같이 this에 바인딩되는 객체는 한가지가 아니라 해당 함수의 호출방식에 따라 this에 바인딩되는 객체가 달라진다.

 ### 함수 호출 방식과 this 바인딩

 자바스크립트의 경우 함수 호출 방식에 의해 **this**에 바인딩할 어떤 객체가 동적으로 결정된다. 다시말해, 함수를 선언할때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

 ------------
 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프(Lexical scope)는 함수를 선언할때 결정된다. this 바인딩과 혼동하지 않도록 주의할것
 ------------

 함수의 호출하는 방식은 아래와 같다

  1. 함수 호출
  2. 메소드 호출
  3. 생성자 함수 호출
  4. apply/call/bind 호출

```
var foo = function () {
    console.dir(this);
};


// 1. 함수호출
foo();  // window
// window.foo();

// 2. 메소드 호출
var obj = { foo : foo };
obj.foo() // obj


// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name : 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar


```
-----------------
이해가 잘 되지않아 다른예제

## this는 현재 실행 문맥이다

실행문맥이란 말은 호출자가 누구냐는 것과 같다.

```
alert(this === window)  // true , 호출자는 window

const caller = {
    f: function() {
        alert(this === window)
    },
}
caller.f() // false, 호출자는 caller 객체
```

첫번째 alert도 따지고보면 window.alert()와 동일하기 때문에 window 객체의 메소드 호출이라봐도 무방합니다.  다만, strict-mode에서는 전역 객체냐 일반 객체냐에 따라 함수내부에 this 의 결과가 다르다는 차이는 있죠. 그러나 이 문제 또한 window 를 함수 호출 앞에 붙여주면 해결됩니다.

```
function nonStrictMode() {
    return this
}

function strictMode() {
    'use strict'
    return this
}

console.log(nonStrictMode())  // window
console.log(strictMode())   // undefined
console.log(window.strictMode()) // window

```

## 생성자 함수 / 객체에서는 어떻게 쓰일까?

 생성자는 new 로 객체를 만들어 사용하는 방식입니다. 객체지향 언어에서 일반적으로 객체를 만들 때 쓰이는 문법과 동일하죠. 가리키는 대상 또한 객체지향 언어의 this와 같기 때문에 이해하기가 한결 수월합니다.

```
function NewObject(name, color) {
    this.name = name
    this.color = color
    this.isWindow = function() {
        return this === window
    }
}

const newObj = new NewObject('nana' , 'yellow')
console.log(newObj.name) // nana
console.log(newObj.color) // yellow
console.log(newObj.isWindow()) // false

const newObj2 = new NewObject('didi' , 'red')
console.log(newObj2.name) // didi
console.log(newObj2.color) // red
console.log(newObj2.isWindow()) // false

```
 new 키워드로 새로운 객체를 생성했을 경우 생성자 함수 내의 this는 new를 통해 만들어진 새로운 변수가 됩니다. newObj, newObj2는 같은 생성자 함수로 만들어진 객체이지만 완전히 별도의 객체이기때문에 각 객체의 속성들은 서로 관련이 없습니다. 만약 new 키워드를 뺀다면 어떻게 될까요?

```
const withoutNew = NewObject('nana' , 'yellow')
console.log(withoutNew.name)    // error
console.log(withoutNew.color)   // error
console.log(withoutNew.isWindow()) // error

```
new 키워드가 없으면 일반적인 함수 실행과 동일하게 동작하므로 , NewObject 함수내의 **this** 는 window객체가 됩니다. 하지만 withoutNew가 함수실행의 결과값이 할당되므로 각 property를 가져올수 없습니다. 그렇다면 생성자 함수가 아닌 일반 객체에서는 어떨까요?

```
const person = {
    name : 'john',
    age : 15000,
    nickname : 'man from earth',
    getName: function() {
      return this.name  
    },
}

console.log(person.getName()) // john

const otherPerson = person
otherPerson.name = 'chris'
console.log(person.getName()) // chris
console.log(otherPerson.getName()) //chris

```

 생성자함수와 크게 다르지 않습니다. 한가지 눈여겨 볼 점은 otherPerson.name을 chris로 설정한뒤 person.getName() 호출하면 그 결과는 chris입니다. 그 이유는 otherPerson 은 레퍼런스 변수이므로 하나(otherPerson)를 변경하면 다른 하나(person)도 변경됩니다. 이를 피하기 위해서는 Object.assign() 메서드(ES6 지원)를 이용하여 완전히 별도의 객체로 만들어야 합니다

 ```
const person = {
    name : 'john',
    age : 15000,
    nickname : 'man from earth',
    getName: function() {
      return this.name  
    },
}
const newPerson = Object.assign({}, person)
newPerson.name = 'chris'
console.log(person.getName()) // john
console.log(newPerson.getName()) //chirs

 ```