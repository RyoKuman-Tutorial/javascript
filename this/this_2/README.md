# THIS_2

## constructor ( 생성자 ) 안에서의 this는 새롭게 생성될 객체를 가르킨다.

```
function constructor(){
  this.a = "a";
  this.b = "b";
}

const onj = new constructor();
console.log(obj.a) // a 출력
console.log(obj.b) // b 출력
```

## EventListener 안에서의 this는 e.currentTarget 을 가르킨다.

```
const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log(this); // e.currentTarget 인 element button 을 출력
});
```

## callback 안에서의 this는 window 를 가르킨다.

```
const array = [1, 2, 3, 4];
array.forEach(function (a) {
  console.log(this);
});

const obj = {
  array: [1, 2, 3, 4],
  func: function () {
    this.array.forEach(function (a) {
      console.log(this);
    });
  },
};

obj.func();

// 둘 다 window 출력
```

## 하지만 arrow function 내부에서의 this 는 해당 함수의 부모를 가르킨다.

```
const objWithArrow = {
  array: [1, 2, 3, 4],
  func: function () {
    this.array.forEach((a) => {
      console.log(this);
    });
  },
};

objWithArrow.func();
// objWithArrow 출력
```
