# CORS (Cross-Origin Resource Sharing)

## CORS란?

CORS(Cross-Origin Resource Sharing, 교차출처 리소스 공유)는 도메인 또는 포트가 다른 서버의 자원을 요청하는 메커니즘을 말한다.

이때 요청을 할때 Cross-origin HTTP에 의해 요청됨

하지만 동일출처 정책 때문에 CORS 같은 상황이 발생하면 외부 서버에 요청한 데이터를 브라우저에서 보안 목적으로 차단함. 그로 인해 정상적으로 데이터를 받을수 없음.

![IMAGE](https://mdn.mozillademos.org/files/14295/CORS_principle.png)

예를들어 개발한 API 서버의 URL이 'https://www.a.com 이라고 하면 브라우저에서 API에 어떤 요청을 한 다음 데이터를 받아온다고 하면 CORS로 인해서 에러가 발생할 수 있다.
컴퓨터와 API 서버의 domain이 다르기 때문에 cross-origin HTTP 요청을 허가해 주어야함

 
간단히 말하면 CORS는 도메인 또는 포트가 다른 서버의 자원을 요청하면 발생하는이슈

## 동일 출처 정책

+ 동일 출처 정책(same-origin policy)
불러온문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제한하는 중요한 보안 방식

동일출처(두 URL의 프로토콜,포트(명시한경우)가 모두 같아야 동일한출처)가 되는 조건에대해 보면

기준 URL : http://store.company.com/dir/page.html

|URL|결과|이유|
|-----------------|-----|------------|
|http://store.company.com/dir2/other.html|성공|경로만다름|
|http://store.company.com/dir/inner/another.html|성공|경로만다름|
|https://store.company.com/secure.html|실패|프로토콜이다름|
|http://store.company.com:81/dir/etc.html|실패|포트 다름 (http://는 80이 기본값)|
|http://news.company.com/dir/other.html|실패|호스트가다름|


만약 개발하며 localhost:3000 에서 react를 실행하였고 서버는 localhost:8000번에서 실행되고 있으면 포트가 달라 CROS가 발생할 수 있다.

### 해결법

서버와 클라이언트가 같은 도메인과 포트를 사용하면됨.
서버에서 cross-origin HTTP요청을 허가해주는것이 좋다.

1. Access-Control-Allow-Origin response 헤더를 추가

```js
app.get('/data', (req , res) => {
    res.header("Access-Control-Allow-Origin" , "*");
    res.send(data);
});
```
모든 클라이언트 요청에대한 cross-origin HTTP 요청을 허가하는 헤더를 추가

rest.api의 모든 응답에 일일히 추가해주기는 힘듬

2. node.js의 미들웨어 CROS 추가

이미 만들어진 node.js미들웨어중 이를 해결해주는 미들웨어 CROS

npm install --save cros
yarn add cors

이것을 이용하면 더욱 간단하게 CORS를 허가해줄 수 있다.

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());    //CORS 미들웨어 추가

```

위에 처럼 헤더를 추가하거나 미들웨어를 적용하게 되면 모든 요청에 대해 허가를 하게됨
그래서 보안적으로 취약해짐

그래서 CORS미들웨어는 여러가지를 설정할 수 있다.
[https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)

```js
const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(cors(corsOptions)); // config 추가
```



출처
+ [https://velog.io/@wlsdud2194/cors](https://velog.io/@wlsdud2194/cors)
+ [MDN동일출처정책](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)
+ [MDN_CROS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
+ [https://velog.io/@suseodd/](https://velog.io/@suseodd/HTTP-%EC%A0%91%EA%B7%BC-%EC%A0%9C%EC%96%B4-CORS-%EB%9E%80)