function Machine() {
  this.q = "consume";
  this.w = "snowball";
}

Machine.prototype.name = "nunu";
// Machin 의 프로로타입 변경

const nunu = new Machine();
console.log(nunu.name);
// nunu 출력 => nunu는 name 을 가지고 있지 않지만, nunu의 부모가 name을 가지고 있으므로 출력 가능

const array = [4, 2, 1];
const arrayWithClass = new Array(4, 2, 1);
// 위 두 array 는 같다.
// array.length 등이 사용 가능한 이유는. array 가 length 를 가지고 있는 것이 아니라,
// array 의 부모인 Array 가 length 를 가지고 있기 때문에 사용 가능하다.
