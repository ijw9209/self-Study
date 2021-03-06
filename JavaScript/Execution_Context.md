# 실행 컨텍스트


## 1. 실행 컨텍스트란 ? 

실행 컨텍스트(Execution Context)는 Scope,hoisting , this,function,closure 등의 동작원리를 담고있는 자바스크립트의 핵심원리이다

ECMAScript 스펙에 따르면 실행컨텍스는 **실행 가능한 코드를 형상화하고 구분하는 추상적인 개념**이라 정의한다.
쉽게말하면 **실행컨텍스트는 실행 가능한 코드가 실행되기위해 필요한 환경**이다.

실행 가능한 코드는 다음과같다.
+ 전역코드 : 전역영역에 존재하는코드
+ Eval코드 : eval함수로 실행되는 코드
+ 함수코드 : 함수내에 존재하는코드

일반적으로는 전역코드와 함수내코드가 실행가능하다.

자바스크립트 엔진은 코드를 실행하기 위해 실행에 필요한 여러가지의 정보를 알고 있어야한ㅁ.

실행에 필요한 여러가지의 정보는 다음과같다.
+ 변수 : (전역, 지역 , 매개)변수 , 객체의 프로퍼티
+ 함수 선언
+ 변수의 유효범위(scope)
+ this

이와같이 실행에 필요한 정보를 형상화하고, 구분하기위해 엔진은 실행컨텍스트를 물리적 객체형태로 관리한다.

```js
var x = 'xxx'

function foo() {
    var y = 'yyy';


    function bar() {
        var z = 'zzz'
        console.log(x + y + z);
    }
    bar();
}
foo();
```

위 예제를 실행하면 실행컨텍스트 스택(Stack)이 생성하고 소멸한다. 현재 실행중인 컨텍스트에서 이 컨텍스트와 관련없는 코드(ex.다른함수)가 실행되면 새로운 컨텍스트가 생성된다.
이 컨텍스트는 스택에 쌓이게되고 컨트롤(제어권)이 이동한다

![image](https://poiemaweb.com/img/ec_1.png)

1. 컨트롤이 실행 가능한 코드로 이동하면 스택구조를 가지는 새로운 실행 컨텍스트 스택이 생성된다. 스택은 LIFO(Last In First Out , 후입선출)의 구조를 가지는 나열구조이다.

2. 전역코드(Global code)로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 쌓인다. 전역 실행 컨텍스트는 애플리케이션이 종료될때(웹페이지를 나가거나 브라우저를 닫을 떄)까지 유지됨.

3. 함수를 호출하면 해당 함수의 실행컨텍스트가 생성되며 , 직전에 실행된 코드 블록의 실행컨텍스트 위에 쌓인다

4. 함수 실행이 끝나면 해당 함수의 실행 컨텍스트를 파기하고 , 직전의 실행 컨텍스트에 컨트롤을 반환한다.


## 2. 실행 컨텍스트의 3가지 객체

실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이지만, 물리적으로는 객체의 형태를 가지며, 아래의 3가지 프로퍼티를 소유함

![image1](https://poiemaweb.com/img/excute_context_structure.png)



### 2-1. Variable Object (VO / 변수객체) 

실행 컨텍스트가 생성되면 자바스크립트 엔진은 실행헤 필요한 여러 정보들을 담을 객체들을 생성한다. 이를 Varibable Object(VO / 변수객체)라고 한다.
Variable Obejct는 코드가 실행될 때 엔진에 의해 참조되며 코드에서는 접근할 수 없다.

Variable Object는 아래의 정보를 담는 객체이다.
+ 변수
+ 매개변수(parameter)와 인수 정보(arguments)
+ 함수 선언(함수 표현식은 제외)

Variable Object는 실행 컨텍스트의 프로퍼티이기 때문에 값을 갖는데 이 값은 다른객체를 가리킨다. 그런데 전역 코드 실행시 생성되는 전역 컨텍스트의 경우와 함수를 실행할 때 생성되는 함수 컨텍스트의 경우, 가리키는 객체가 다르다. 이는 전역 코드와 함수의 내용이 다르기때문이다. 예를들어 전역코드에는 매개변수가 없지만, 함수에는 매개변수가 있다.

========

**전역 컨텍스트의 경우**
Variable Object는 유일하며 최상위에 위치하고 모든 전역변수, 전역 함수 등을 포함하는 **전역 객체(Global Object / GO)**를 가리킨다. 전역객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유한다.

![image2](https://poiemaweb.com/img/ec-vo-global.png)

=======
**함수 컨텍스트의 경우**
Variable Object는 **Activation Object(AO / 활성 객체)**를 가리키며 매개변ㄴ수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 **argument Object**가 추가된다


![image3](https://poiemaweb.com/img/ec-vo-foo.png)


### 2.2 Scope Chain (SC)

스코프 체인은 일종의 리스트로서 전역객체와 중첩된 함수의 스코프의 레퍼런스를 차례로 저장하고 있다. 다시말해 스코프체인은 해당 전역 또는 함수가 참조할 수 있는 변수, 함수선언등의 정보를 담고 있는 전역 객체(GO) 또는 활성객체(AO)의 리스트를 가리킨다

현재 실행 컨텍스트의 활성객체(AO)를 선두로 하여 순차적으로 상위 컨텍스트의 활성 객체(AO)를 가리키며 마지막 리스트는 전역 객체(GO)를 가리킨다.


![image4](https://poiemaweb.com/img/ec-sc.png)

**스코프 체인은 식별자 중에서 객체(전역 객체 제외)의 프로퍼티가 아닌 식별자, 즉 변수를 검색하는 메커니즘이다.**  식별자 중에서 변수가 아닌 객체의 프로퍼티(물론 메소드도 포함)를 검색하는 메커니즘은**프로토타입 체인**이다.

엔진은 스코프 체인을 통해 렉시컬 스코프를 파악한다. 함수가 중첩 상태일때 하위함수 내에서 상위함수의 스코프와 전역 스코프까지 참조할수 있는데 이것은 스코프 체인 검색을 통해 가능하다. 함수가 중첩되어 있으면 중첩될때마다 부모함수의 scope가 자식함수의 scope 체인에 포함된다. 함수 실행중에 변수를 만나면 그 변수를 우선 현재 scope, 즉 Activation Object에서 검색해보고, 만약 검색에 실패하면 스코프 체인에 담겨진 순서대로 그 검색을 이어가게 되는것이다.  이것이 스코프 체인이라고 불리는 이유이다.

예를들어 함수 내의 코드에서 변수를 참조하면 엔진은 스코프 체인의 첫번째 리스트가 가리키는 AO에 접근하여 변수를 검색한다. 만일 검색에 실패하면 다음 리스트가 가리키는 AO(또는 전역 객체)를 검색한다. 이와같이 순차적으로 스코프 체인에서 변수를 검색하는데 결국 검색에 실패하면 정의되지않은 변수에 접근하는 것으로 판단하여 Reference에러를 발생시킨다.


### 2.3 this value

this 프로퍼티에는 this 값이 할당된다. **this**에 할당되는 값은 함수 호출 패턴에 의해 결정된다.

## 3. 실행 컨텍스트의 생성과정

```js
var x = 'xxx'

function foo() {
    var y = 'yyy';
    
    function bar() {
        var z = 'zzz';
        console.log(x + y + z);
    }
    bar();
}

foo();

```

### 3.1 전역 코드로의 진입

컨트롤이 실행 컨텍스트에 진입하기 이전에 유일한 전역 객체(GO)가 생성된다.
전역객체는 단일 사본으로 존재하며 , 이 객체의 프로퍼티는 코드의 어떠한 곳에서도 접근할 수 있다. 초기상태의 전역객체는 빌트인 객체(Math , String , Array 등)와 BOM,DOM이 설정되있다.

![image4](https://poiemaweb.com/img/ec_3.png)

전역 객체가 생성된 이후 , 전역 코드로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고, 실행 컨텍스트 스택에 쌓인다

![image5](https://poiemaweb.com/img/ec_4.png)

그리고 이후 이 실행 컨텍스트를 바탕으로 이하의 처리가 실행된다.
1. 스코프 체인의 생성과 초기화
2. Variable Instantation(변수 객체화) 실행
3. this value 결정

### 3.1.1 스코프 체인의 생성과 초기화

실행 컨텍스트가 생성된 이후 가장 먼저 스코프체인의 생성과 초기화가 실행된다. 이때 스코프 체인은 전역 객체의 레퍼런스를 포함하는 리스트가된다.

![image6](https://poiemaweb.com/img/ec_5.png)


### 3.1.2 Variable Instantiation(변수 객체화)실행

스코프 체인의 생성과 초기화가 종료하면 변수 객체화가 실행된다.

변수 객체화는 VO에 프로퍼티와 값을 추가하는것을 의미한다. 변수 객체화라고 번역하기도 하는데 이는 변수,매개변수와 인수정보(arguments), 함수 선언을 VO에 추가하여 객체화하기 때문이다.

전역 코드의 경우 , VO는 GO를 가리킨다.

![image7](https://poiemaweb.com/img/ec_6.png)

Variable Instantiation(변수 객체화)는 아래의 순서로 Variable Object에 프로퍼티와 값을 set 한다(1>2>3 순서로 반드시실행)

1. (Function Code인 경우) **매개변수(parameter)** 가 VO의 프로퍼티로 , 인수 (argument)가 값으로 설정된다.

2. 대상 코드내의 함수 선언(함수 표현식 제외)를 대상으로 함수명이 VO의 프로퍼티로 , 생성된 함수 객체가 값으로 설정된다.(**함수 호이스팅**)

3. 대상 코드 내의 변수 선언을 대상으로 변수명이 VO의 프로퍼티로 , undefined가 값으로 설정된다(**변수 호이스팅**)