# Vue Instance

인스턴스는 Vue.js로 화면을 개발하기 위해 꼭 생성해야 하는 필수 단위이다.

## 1. Vue Instance 생성자

Vue 생성자 함수를 이용하여 인스턴스를 생성하는 방법은 아래와 같다.

```js
new Vue({
  // instance option properties
});
```

Vue 객체를 생성할때 아래와 같이 data , template , el , method ,
life cycle hook 등의 인스턴스 옵션 속성을 포함 할 수 있다.

```js
new Vue({
  // instance option properties
  template: "",
  el: "",
  methods: {}
  // ...
});
```

## 2. Vue Instance 속성

- data
- el
- computed
- methods
- watch

## 2-1. data

Vue에서 사용하는 데이터 객체이다. data는 Vue 객체 내부에 존재하는 것이 아닌 별도의 프록시를 통해서 관리되고있다.
Vue 객체를 통해 프록시 처리된 data에 접근하는 방법은 다음과 같다.

- **var vm = new Vue{(...)}** 와 같이 선언된 경우 vm을 통해 접근

```js
var sample = new Vue({
  data: {
    name: "홍길동",
    age: "21"
  }
});
sample.name = "이순신";
sample.age = "17";
//위와같이 접근가능하다.
```

- **\$data**를 사용하여 접근

```js
sample.$data.name = "이순신";
sample.$data.age = "20";
```

## 2-2. el

Vue 인스턴스와 HTML DOM 객체를 선택자로 연결해주는 역할을 한다.
단 Vue 객체는 반드시 하나의 DOM과 연결 된다는 것이다 . 그래서 일반적으로
**ID** 속성을 이용하여 연결한다. **class**와 같이 여러개가 존재할 수 있는 선택자로 연결하려고 할 때는 **첫번째 DOM과 연결** 된다.

## 2-3 computed

**computed**는 Vue 객체에서 어떤 계산 결과를 속성으로 이용하기 위해 사용한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>sample3</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="app">
      <div>
        모든 과일의 총 합은 {{sum}}입니다.
      </div>
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
      new Vue({
        el: "#app",
        data: {
          items: [
            { name: "사과", price: 2000 },
            { name: "포도", price: 3000 },
            { name: "딸기", price: 4000 },
            { name: "수박", price: 12000 },
            { name: "참외", price: 1000 },
            { name: "오렌지", price: 7000 }
          ]
        },
        computed: {
          sum: function() {
            var items = this.items;
            var total = 0;
            items.forEach(function(value) {
              var num = Number(value.price);
              if (!num) {
                total += num;
              }
            });

            return total;
          }
        }
      });
    </script>
  </body>
</html>
```

- [출처] : (https://vvhiteboard.github.io/web/2017/11/23/vue-basic2/)
