# 스코프 체인

**스코프 체인(scpoe chain)**은 전역변수와 지역변수의 관계에서 나온다.

내부함수에서는 외부함수의 변수에 접근 가능하지만, 외부함수에서는 내부함수의 변수에 접근 할 수 없다. 
아래 enemy는 undefined

```js
var name = 'zero';
function outer() {
    console.log('외부' , name);
    function inner(){
        var enemy = 'nero';
        console.log('내부' , name);
    }
    inner();
}
outer();
console.log(enemy); //undefiend
```

inner 함수는 name변수를 찾기위해 자기자신의 스코프에서 찾고, 없으면 한단계 올라가서 outer스코프에서 찾고, 없으면 다시올라가 전역 스코프에서 찾는다. 다행히 전역스코프에서 name변수를 찾아 'zero'라는 값을 얻었다. 만약 전역스코프에도 없다면 변수를 찾지못했다는 에러가 발생한다.
이렇게 꼬리를 물고 계속 범위를 넓히면서 찾는 관계를 **스코프 체인**이라고 한다.

## 렉시컬 스코핑(lexical scoping)

**스코프**는 함수를 호출할 때가 아니라 **선언**할때 생긴다. 
정적 스코프라고도 불린다. 

```js
var name = 'zero';
function log(){
    console.log(name);
}

function wrapper(){
    name = 'nero';
    log();
}
wrapper();      //nero

```


```js
var name = 'zero';
function log() {
    console.log(name);
}

function wrapper(){
    var name = 'nero';
    log();
}

wrapper(); //zero

```

스코프는 함수를 **선언**할때 생긴다 log안의 name은 wrapper()안의 지역변수 name이 아니라. 전역변수 name을 가리키고있다. 이런것을 **lexical scopeing**이라고 한다.
직역하면 어휘적 범위이다.

위의 두번째 예제는 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운곳(상위 범위에서)에 있는 변수를 계속 참조.
위의 예시에서는 log 함수안의 name변수는 선언시 가장 가까운 전역변수 name을 참조하게 된다. 그래서 wrapper()안에서 log를 호출해도 지역변수 name='nero'를 참조하는 게 아니라 그대로 전역변수 name의 값인 zero가 나오는 겁니다.

무슨짓을 해도 log함수가 한 번 선언된 이상, 전역변수를 가리키게 되어있는 name변수가 다른걸 가리키게 할 수 없다. 유일한 방법은 아까처럼 전역변수를 다른 값으로 바꾸는것.

