var a = 1; // 전역 스코프

function funcPrint1() {
  var a = 111;
  console.log("funcPrint1 is : " + a);
} // 지역(함수) 스코프

function funcPrint2() {
  var a = 11;
  function funcPrint3() {
    console.log("funcPrint2 is :" + a);
  }
  funcPrint3();
} // 지역(함수) 스코프

funcPrint1(); // 111 => function(local) scope 내부에 a 가 존재하므로, 해당 a 출력
funcPrint2(); // 11 => function(local) scope 내부에 a 가 존재하지 않으므로, scope chain 에 의해 a 를 찾을때 까지, 상위 scope 검토
console.log("funct console.log is : " + a); // 1 => function(local) scope 내부에 a 가 존재하지 않으므로, scope chain 에 의해 a 를 찾을때 까지, 상위 scope 검토

function blockPrint() {
  const b = 111;
  console.log("blockPrint is :" + b); // 111 => b 는 현재 block scope 에 존재, 때문에 111 출력

  function test() {
    const c = 111;
    console.log(b, c); // 111 111 => b 는 현재 block scope 에 존재하지 않는다, 때문에 scope chain 에 의해 상위 스코프들을 검토, blockPrint의 b 발견 이후 출력
  }

  test(); /// 111 111
}

blockPrint(); // 111 , 111 111
