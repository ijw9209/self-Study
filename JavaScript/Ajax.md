# AJAX


## AJAX란?

Asynchronous Javascript And XML의 약자, 비 동기적으로 JS를 사용해 데이터를 받아와서 동적으로 DOM을 갱신 및 조작하는 웹개발 기법.


## 동작방법

![image](https://github.com/baeharam/Must-Know-About-Frontend/raw/master/images/javascript/ajax.png)

1. 사용자가 AJAX가 적용된 UI와 상호작용하면 , 서버에 AJAX요청을 보냄
2. 서버는 DB에서 데이터를 가져와 HTML/CSS와 융합하여만든 DOM객체를 UI에 업데이트 

비동기로 이루어지며, 기존의 페이지를 전부 로딩하는 방식이아닌 일부만 업데이트

## 사용법

### XMLHttpRequest

일반적으로 XMLHttpRequest 객체를 사용해 인스턴스를 만들어 open() , send()등의 메소드를 이용

```js
// XMLHttpRequest 객체의 생성
const xhr = new XMLHttpRequest();

// 비동기 방식으로 Request를 오픈한다
xhr.open('GET', '/users');

// Request를 전송한다
xhr.send();

```
open() 으로 요청할 메소드와 URL을 설정한뒤 , 모두 로드되었을 경우 콜백함수 초기화.

#### XMLHttpRequest.open

XMLHttpRequest 객체의 인스턴스를 생성하고 XMLHttpRequest.open 메소드를 사용하여 서버로의 요청을 준비한다. 

```js
XMLHttpRequest.open(method, url[, async])
```

|매개변수|설명|
|------|----------------|
|method|HTTP method("GET" , "POST" , "PUT" , "DELETE"등 )|
|url|요청을 보낼 url|
|async|비동기 조작여부 default는 true|


#### XMLHttpRequest.send

XMLHttpRequest.send 메소드로 준비된 요청을 서버에 전달한다.

기본적으로 서버로 전송하는 데이터는 GET, POST 메소드에 따라 그 전송 방식에 차이가 있다.

+ GET 메소드의 경우 , URL의 일부분인 쿼리문자열로 데이터를 서버로 전달한다.
+ POST 메소드의 경우 , 데이터(페이로드)를 Request Body에 담아 전송

X**MLHttpRequest.send 메소드에는 request body에 담아 전송할 인수를 전달할 수 있다.**

### Fetch API

Fetch api는 IE를 지원하지 않는다는 점을빼고는 XMLHttpRequest 보다 직관적이다.
ES6에서 표준이되었고  , Promise를 리턴

```js
fetch("https://learnwebcode.github.io/json-example/animals-1.json")
    .then(res => res.json())
    .then(resJson => console.log(resJson));

```
응답 객체는 json() , blob()와 같은 내장메소드로 body를 추출하고 promise를 리턴한다.


### 장단점

장점
+ 페이지를 전환하지않고 빠르게 화면일부분을 업데이트함.
+ 수신하는 데이터 양을 줄일 수 있고, 클라이언트에게 처리를 맡길수 있다.
+ 서버 처리를 기다리지않고 비동기 요청 가능

단점
+ 지원하지 않는 브라우저가있다.
+ 페이지 전환없이 서버와 통신을 하기때문에 보안상에 문제가 있을수있다.
+ 무분별하게 사용하면 역으로 서버의 부하가 일어남
+ 동일 출처 정책 문제가 발생할 수 있다.


## 용어
+ 동일 출처 정책 : 어떠한 문서나 스크립트가 다른 프로토콜 / 포트 / 호스트 에 있는 리소스 사용하는 것을 제한하는 정책, 호스트, 포트, 프로토콜 중 하나라도 다르면 동일 출처 정책이 적용되서 요청에 실패

+ DOM : 문서 객체 모델(DOM, Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스입니다.
이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법






출처
+ [https://poiemaweb.com/js-ajax](https://poiemaweb.com/js-ajax)
+ [https://github.com/baeharam/](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/javascript/ajax.md)
+ [http://tcpschool.com/javascript/js_dom_concept](http://tcpschool.com/javascript/js_dom_concept) 