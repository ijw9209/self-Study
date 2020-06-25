# 웹팩으로 리액트 시작하기

## 리액트를 사용하는 이유

사용자 인터페이스(UI)를 만들기 위한 자바스크립트 라이브러리 프레임워크이다.

특징은 SPA(Single Page Application)을 가지고 있다.


## react를 사용한 사용환경 구축

npm을 통해 react환경을 구성한다.
npm은 Node.js (자바스크립트 코드가 브라우저가 아닌곳에서도 동작할 수 있게 해주는 런타임 환경)에서 개발을 편하게 하도록 사용하는 프로그램이다. 

1. npm은 `npm init` , yarn은 `yarn init -y`를 해줌
   그러면 package.json이 생긴다.

2. react, react-dom 설치 
```
yarn add react react-dom
```
+ react : 리액트 라이브러리
+ react-dom : browser , dom , webapp 관리

## babel 설치

```
yarn add -D  @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
```

babel을 사용하는 이유는 babel이 있으면 자바스크립트 코드가 어떤 환경에서 돌아갈지를 설정 함으로써 코드를 트랜스파일 할 수 있다.

+ @babel/core : react는 es6문법을 사용하므로 여러 브라우저에서 사용가능하도록 es5버전으로 syntax를 변경

+ @babel/preset-react : jsx를 쓸 수 있다. jsx는 react 공식 홈페이지에 나온다. 자바스크립트 확장판

+ @babel/preset-env : es6 문법을 es5이하로 설정에 맞게 트랜스파일됨

+ babel-loader : 자바스크립트 파일을 babel preset/plugin과 webpack 을 사용하여 es5로 컴파일 해주는 plugin 
jsx => javascirpt로 컴파일 html webpack plugin

+ @babel/plugin-proposal-class-properties : class property 관련 문제를 해결할때 사용 hook을 쓸때는 없어도됨

## webpack 설치

```
yarn add -D webpack webpack-dev-server webpack-cli html-webpack0plugin
```

+ webpack
+ 모든 리액트 파일을 하나의 컴파일된 하나의 자바스크립트 파일에 넣기위해
+ webpack-dev-server
+ live reload
+ [https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/)
+ webpack-cli
+ build 스크립트를 통해 webpack 커맨드를 사용하기 위해
+ html-webpack-plugin
+ html에 bundle된 자바스크립트 파일을 `<script>...</script>`형태로 추가해줌
+ Loaders : 코드 불러옴
+ transform the source code of a module.
    - style-loader css를
    - sass-loader SASS파일을 CSS로 컴파일
    - babel-loader babel로 javascript 코드를 traspile 


+ 출처

+ [https://velog.io/@noyo0123/react-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-c1k2zrmxet](https://velog.io/@noyo0123/react-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-c1k2zrmxet)