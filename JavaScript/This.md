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

 ```java
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

```javascript
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

```javascript
alert(this === window)  // true , 호출자는 window

const caller = {
    f: function() {
        alert(this === window)
    },
}
caller.f() // false, 호출자는 caller 객체
```

첫번째 alert도 따지고보면 window.alert()와 동일하기 때문에 window 객체의 메소드 호출이라봐도 무방합니다.  다만, strict-mode에서는 전역 객체냐 일반 객체냐에 따라 함수내부에 this 의 결과가 다르다는 차이는 있죠. 그러나 이 문제 또한 window 를 함수 호출 앞에 붙여주면 해결됩니다.

```javascript
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

```javascript
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

```javascript
const withoutNew = NewObject('nana' , 'yellow')
console.log(withoutNew.name)    // error
console.log(withoutNew.color)   // error
console.log(withoutNew.isWindow()) // error

```
new 키워드가 없으면 일반적인 함수 실행과 동일하게 동작하므로 , NewObject 함수내의 **this** 는 window객체가 됩니다. 하지만 withoutNew가 함수실행의 결과값이 할당되므로 각 property를 가져올수 없습니다. 그렇다면 생성자 함수가 아닌 일반 객체에서는 어떨까요?

```javascript
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

 ```javascript
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


 ## bind , arrow function 

 생성자 함수 안에서 또 다른 함수가 있는경우

 ```javascript
 function Family(firstName) {
     this.firstName = firstName
     const names = ['bill' , 'mark', 'steve' ]
     names.map(function(lastName , index) {
         console.log(lastName + ' ' + this.firstName)
         console.log(this)
     })
 }
 const kims = new Family('kim')
 // bill undefined
 // window
 // mark undefined
 // window
 // steve undefined
 // window
 ```

 Family 라는 생성자 함수 안에서 map 메서드를 호출합니다. map 메서드의 인자는 value 와 index를 인자로 가지는 새로운 함수입니다. 이를 **서브루틴** 이라 부르고, 이는 특별한 개념이아닌 자바스크립트에서 함수의 의미가 다양하기 때문에 단지 메서드가 아닌 함수와 구분하기 위한 용도로 서브루틴이라는 단어를 사용합니다.

 이 서브루틴에서는 lastName 들을 담은 names 배열의 map 메서드를 이용하여 lastName과 this의 firstName을 같이 출력하고자 합니다. 하지만 막상 실행을 해보면 예상과 다르게 출력됩니다. kim이 출력될 위치에 undefined가 출력되었습니다. 이는 map의 서브루틴에서 this 를 사용하는 것이 문제였습니다. this 가 실행 문맥이라고 했던것을 상기해보면 undefined 가 출력되는 이유를 짐작해볼 수 있습니다. map 메서드의 서브루틴은 호출될때 map 의 context(this)로 바인드 되지 않습니다. 바인드 되지 않았다는 것은 실행문맥이 전역이라는 것이고 실행문맥이 전역이란 말은 (비엄격모드에서) 서브루틴 내 this 가 window라는 것입니다.

 비슷한 다른 예제

 ```javascript
 const testObj = {
     outerFunc: function() {
         function innerFunc() {
             console.log(this) //window
         }
         innerFunc()
     },
 }
 testObj.outerFunc()

 ```

 outherFunc 가 외부에서 실행(testObj.outerFunc())되면 this 는 testObj 입니다. 그리고 outerFunc 내부에서 innerFunc 가 호출할때는 그 어떤 문맥도 지정하지(바인드되지) 않았습니다. 전역 context(window)에서 실행되었다는 것이죠. 이게 바로 (비엄격모드에서) innerFunc 의 this 가 window 가 되는 이유 입니다.

 다시 이전의 생성자함수(Family)로 돌아갑니다 map메서드의 서브루틴에서 this가 window로 된다는것은 이미 위에서 설명했습니다. 하지만 생성자 함수 내의 특정 변수를 서브루틴 내에서 사용할수도 있습니다. 이때 실행문맥(this)을 Family로 지정하려면 간단하게는 별도의 상수(const)를 지정하면 됩니다.

 ```javascript
function Family(firstName) {
    this.firstName = firstName
    const names = ['bill','mark', 'steve']
    const that = this
    names.map(function(value, index) {
        console.log(value + ' ' + that.firstName)
    })
}
const kims = new Family('kim')
// bill kim
// mark kim
// steve kim


 ```

 문제없이 이름들이 출력됩니다. 하지만 항상 that 이라는 상수를 만들어주면 귀찮습니다. 또한 만에하나 실수로 빼먹기라도 하면 어마어마한 문제가 발생할지도 모릅니다. 혹은 서브루틴 안에서 또다른 서브루틴을 사용할 수도 있습니다. 그 때는 anoterThat을 만들어야할까요 ? 이 문제를 해결하기위해 bind라는 메서드를 사용합니다

 ```javascript
 function Faimly(firstName) {
     this.firstName = firstName
     const names = ['bill' , 'mark' , 'steve']
     names.map(
         function(value, index) {
             console.log(value + ' ' + this.firstName)
         }.bind(this)
     )
 }
 const kims = new Faimly('kim')

```

 that을 쓸때 보다는 깔끔해졌습니다. 하지만 .bind(this) 도 항상 붙여줘야한다는 문제는 여전히 남아있습니다 . 이제 arrow function이 나올차례입니다.

 ```javascript
 function Family(firstName) {
     this.firstName = firstName
     const names = ['bill' , 'mark' , 'steve']

     names.map((value, index) => {
         console.log(value + ' ' + this.firstName)
     })
 }

 ```

 이제 that도 없고 , bind도 없습니다. 함수의 형태만 바꿔주면 모든게 해결됩니다. 그럼 일반 함수형태에서 arrow함수를 사용했을때 어떤 차이가 있을가요 ? arrow 함수 또한 ES6에서만 지원하기때문에 babel 사이트에서 변환해보겠습니다


 ```javascript
 'use strict'

function Family(firstName) {
  var _this = this

  this.firstName = firstName
  var names = ['bill', 'mark', 'steve']
  names.map(function(value, index) {
    console.log(value + ' ' + _this.firstName)
  })
}
var kims = new Family('kim')
```

that 을 사용했을 때와 동일한 방법으로 트랜스파일 되네요. 미리 내부에서만 사용할 변수 _this를 만들어 두고, this 를 할당합니다. 그리고 _this를 사용하여 firstName 을 가져옵니다. arrow 함수는 호출 대상에 따라 실행문맥이 결정되는 것이 아닙니다.

### 결론 

this 는 어렵지 않습니다. 하지만, 타 언어와 다른 방식으로 사용되기에 주의해서 사용할 필요가 있습니다. 한가지만 기억하자면, this 는 누가 호출했느냐에 따라 결정된다는 것입니다. ES6 문법을 사용하면 this 를 사용할때 문제점을 완화할 수 있습니다. 예를들어, 서브루틴 내에서 바깥의 this 를 사용하려고 할때는 arrow function 을 이용하면 간단하게 해결할 수 있습니다.

출처 : <br/>
1.[https://blueshw.github.io/2018/03/12/this/](https://blueshw.github.io/2018/03/12/this/)<br/>
  2.[https://poiemaweb.com/js-this](https://poiemaweb.com/js-this)        