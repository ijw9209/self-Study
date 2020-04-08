# 스코프

## 스코프? 

스코프란 자바스크립트 엔진이 참조의 대상이 되는 식별자(Identifier)를 검색할때 사용하는 규칙의 집합이다. 즉, 어떤 변수를 사용하거나 함수를 호출하려고 할 때 해당하는 식별자로 사용하는데, 그 식별자를 검색하는 메커니즘


## 렉시컬 스코프 

프로그래머가 코드를 짤 때  , 변수 및 함수/블록 스코프를 어디에 작성하였는가 에 따라 정해지는 스코프를 렉시컬 스코프라 한다.
"렉시컬(Lexical)" 이라는 명칭이 붙은 이유는 자바스크립트 컴파일러가 소스코드를 토큰(Token)으로 쪼개서 의미를 부여하는 렉싱(Lexing) 단계에 해당 스코프가 확정되기 때문이다. 
다시말하면 변수 혹은 함수 블록이 어디에 써있는가에 따라 스코프를 판단하면된다. 

## 스코프 체인 

현재 스코프에서 식별자를 검색할 때 상위 스코프를 연쇄적으로 찾아나가는 방식을 말한다. 실행컨텍스트를 배웠다면 생성될때 마다 LexicalEnvironment 가 만들어지고 그안에 outer 참조 값이 있다는 것을 알것이다. 바로 이 outer 참조값이 상위 스코프의 LexicalEnvironment를 가리키기 때문에 이를 통해 체인처럼 연결되는것이다.

이와 같인 과정으로 스코프체인을 검색한다

1. 현재 실행 컨텍스트의 LexicalEnvironment의 EnvironmentRecord에서 식별자를 검색한다
2. 없으면 outer 참조 값으로 스코프 체인을 타고 올라가 상위 스코프에 EnvironmentRecord 에서 식별자를 검색한다.
3. 이를 outer 참조 값이 null 일때 까지 계속하고 찾지 못한다면 에러를 발생시킨다


출처 : 
+ [https://github.com/baeharam/](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/javascript/scope.md)