# THIS_1

### 아무것도 없는 상태의 this는 window 를 가르킨다

```
console.log(this);
// print window
```

### strict mode 에서 함수 내부에서 선언된 this는 undefined 를 가르킨다

```
function func() {
  console.log(this);
}

func();
// print undefined
```

### 객체 내부에서 선언된 this는 해당 객체를 가르킨다

```
const obj = {
  data: "kim",
  func: function () {
    console.log(this);
  },
};

obj.func();
// print obj
```

### 결론

this 는 해당 메소드( 객체 속의 함수 ) 를 소유하고 있는,
객체를 가르킨다.

```
const obj1 = {
  obj2 : {
    obj3 : {
      func : function (){ console.log (this)}
    }
    func : function (){ console.log (this)}
  }
  func : function (){ console.log (this)}
}

obj1.func() // obj1 을 가르킨다.
obj1.obj2.func() // obj2 을 가르킨다.
obj1.obj2.obj3.func() // obj3 을 가르킨다.
```

또한 작성하는 모든 함수의 최상위는 window 라고하는 객체이다.

```
function func1 (){}
(window.func1 === func1) == true;
```
