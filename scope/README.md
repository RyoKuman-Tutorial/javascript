# SCOPE

## GOBAL SCOPE

js 가 가지고 있는 최상위 스코프,
쉽게 생각하자면, js 에서 사용하는 객체인 window 라고 생각하면 된다.

```
var a = 1
func1(){}

func1() == window.func1() // true
a == window.a // true
```

위 코드가 이해되지 않는다면, window 에 대해 다시한번 공부해봐야 할 것이다.

## WHAT IS BLOCK?

쉽게 말해 블록이란, 중괄호를 뜻한다
중괄호는 많은곳에서 사용되는데 대표적으로 반복문, 조건문 등에 사용된다.
예를 들어

```
func1(){
  if(){
    funct2(){}
  }
  for{}
}
```

라고 할 경우, 최상위 block 은 func1 이며,
func1 의 하위 block 은 if, for
if 의 하위 block은 func2 이다.

## WHAT IS SCOPE CHAINING

특정 변수를 활용할 때, 해당 변수가 스코프 내부에 없을 시
상위 스코프를 검토하는 방식이다.
예를 들어

```
func1(){
  const a = 1;
  if(){
    funct2(){
      console.log(a);
    }
  }
  for{}
}
```

위의 경우 func2 에 a 가 존재하지 않으므로 상위 스코프인 if, func1 등을 검토하여 a 를 찾아내
func1 의 변수인 a 값인 1을 출력한다.

♣️ 상위 스코프가 무엇이 될 지는, 어떤 스코프를 사용하느냐에 따라 달라진다, <br/>
function 이라면 func1, window 가 상위 스코프,<br/>
block 이라면 글처럼 if, func1, window 가 상위 스코프이다.<br/>
해당 개념은 아래에서 추가적으로 다루기에, 그런게 있구나 하고 넘어가면 된다.

## FUNCTION SCOPE

var 을 사용할 때 적용하는 스코프,
block 과 달리, function 을 기준으로 적용된다.

```
func1(){ // func2 의 부모 스코프이며, window 의 자식 스코프이다.
  if(){
    funct2(){} // func1의 자식 스코프이다.
  }
}
```

## BLOCK SCOPE

const, let 을 사용할떄 적용하는 스코프
block(중괄호) 를 기준으로 적용된다.

```
func1(){ // if 의 부모 스코프이며, window 의 자식 스코프이다.
  if(){ // func2 의 부모 스코프이며, func1 의 자식 스코프이다.
    funct2(){} // if의 자식 스코프이다.
  }
}
```

### REF

https://medium.com/@su_bak/javascript-%EC%8A%A4%EC%BD%94%ED%94%84-scope-%EB%9E%80-bc761cba1023
https://poiemaweb.com/js-scope
https://www.youtube.com/watch?v=HsJ4oy_jBx0
