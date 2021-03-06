# Stack (스택) - 자료구조

## Stack의 특징

+ 데이터를 집어넣을 수 있는 선형(linear) 자료형
+ 나중에 집어넣은 데이터가 먼저 나옴. **후입선출LIFO(Last In First Out)**
+ 데이터를 집어넣는 push, 데이터를 추출하는 pop , 맨 나중에 집어넣은 데이터를 peek등의 작업을 할 수 있다.


![image](https://postfiles.pstatic.net/20150101_279/javaking75_1420055835323ksqfQ_JPEG/Stack.jpg?type=w2)


|ADT|설명|
|------|------------|
|top|(프로퍼티) 현재 위치|
|length|(함수) 스택에 포함된 요소 수 반환|
|clear|(함수) 스택의 모든 요소 삭제|
|push|(함수) 스택의 새 요소를 추가|
|pop|(함수) 스택의 탑에 있는 요소를 반환(요소를 영구적으로 꺼냄)|
|peek|(함수) 스택의 탑에 있는 요소 반환(요소를 제거하지않고 내용만 확인)|
|empty|(함수) 스택에 요소가 있는지 여부를 파악|


스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 **이전의 작업을 저장할 필요가 있을때** 사용됨


## stack 구현

```js
//스택 생성자 함수
function Stack() {
    this.dataStore = []; //스택요소를 저장하는 배열
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
//push
function push(element) {
    this.dataStore[this.top++] = element;
    // 현재 top위치의 새요소를 추가한다음 top증가
}
//pop
function pop() {
    return this.dataStore[--this.top];
    //스택의 탑위치에 있는 요소를 반환하고 top변수를 감소
}
//peek
function peek() {
    return this.dataStore[this.top - 1];
}
//length
function length() {
    return this.top;
}
//clear
function clear() {
    this.top = 0;
    // top 변수를 0으로 설정하면 스택전체 요소가 삭제
   }
//구현 테스트
var s = new Stack();
s.push("하나");
s.push("둘");
s.push("셋");
console.log("length" + s.length()); //length 3
console.log(s.peek());  // 셋
s.pop();
console.log(s.peek());  // 둘



```




출처
+ [https://helloworldjavascript.net/pages/282-data-structures.html](https://helloworldjavascript.net/pages/282-data-structures.html)
+ [네이버블로그](https://blog.naver.com/PostView.nhn?blogId=javaking75&logNo=220226369586&categoryNo=71&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)