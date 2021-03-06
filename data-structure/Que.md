# 큐 (Queue)

## 큐(Queue)의 특징

큐 (Queue)는 다음과 같은 특징을 가지고있다.

+ 데이터를 집어 넣을 수 있는 선형(linear) 자료형
+ 먼저 집어넣은 데이터가 먼저 나온다. **FIFO**(First In First Out)
+ 데이터를 집어넣는 enqueue , 데이터를 추출하는 dequeue 등의 작업을 할 수 있다.


![image](https://ww.namu.la/s/b7785ff70f623fedbcae126015a3ae0a18b2f3a785bdd691d803aad2b10aee91f7b3fc438aadd3676cb84b9608ac18c4ce4dcc9a35eed34a61a2ffffff9b56eb7cdd94544cc1d79b7d06c6eb1c90a138645f91da866fe6567a4a2647f2f6553c)


|ADT|설명|
|------|------------|
|enqueue|큐에 요소를 추가(큐의 끝부분에 추가)|
|dequeue|큐에서 요소를 삭제(큐의 앞부분에서 요소를 삭제)|
|clear|큐의 모든 요소 삭제|
|front|큐의 앞부분에 저장된 요소 반환|
|back|큐의 끝부분의 저장된 요소 반환|
|empty|큐의 요소가 있는지 여부를 확인|
|toString|큐의 모든 요소를 문자열로 표현해 반환|



자바스크립트 배열은 다음과 같은 함수로 쉽게 큐 구현 가능
+ push() : 배열의 끝 부분에 데이터를 추가
+ shift() : 배열의 앞부분에서 데이터를 삭제 
    
    



## 큐 구현

```js

    //큐 생성자함수
    function Queue() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }

    //enqueue
    //큐의 끝부분에 요소를 추가
    function enqueue(element) {
        this.dataStore.push(element);
    }

    //dequeue
    //큐의 앞부분에서 요소를 삭제
    function dequeue() {
        return this.dataStore.shift();
    }

    //front
    //큐의 앞부분에 저장된 요소 확인
    function front() {
        return this.dataStore[0];
    }

    //back
    //큐의 끝 부분에 저장된 요소 확인
    function back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    //toString
    //큐의 모든 요소를 출력
    function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i];
        }
        return retStr;
    }


    //empty
    //큐가 비어있는지 여부 확인
    function empty() {
        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    function print(v) {
        document.write(v + "<br/>");
    }
    //테스트 
    var q = new Queue();
    q.enqueue("첫");
    q.enqueue("둘");
    q.enqueue("셋");
    print(q.toString());
    q.dequeue();
    print(q.toString());
    print("Front of queue: " + q.front());
    print("Back of queue : " + q.back());

```


큐는 순서대로 처리해야 하는 작업을 임시로 저장해두는 **버퍼(Buffer)**로서 많이사용

참조문서 : 

+ [https://helloworldjavascript.net/pages/282-data-structures.html](https://helloworldjavascript.net/pages/282-data-structures.html)
+ [http://blog.naver.com/PostView.nhn?blogId=javaking75&logNo=220226682161&parentCategoryNo=71&categoryNo=&viewDate=&isShowPopularPosts=true&from=search](http://blog.naver.com/PostView.nhn?blogId=javaking75&logNo=220226682161&parentCategoryNo=71&categoryNo=&viewDate=&isShowPopularPosts=true&from=search)