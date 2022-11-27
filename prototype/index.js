function Machine() {
  this.q = "consume";
  this.w = "snowball";
}

Machine.prototype.name = "nunu";
// Machin 의 프로로타입 변경

const nunu = new Machine();
console.log(nunu.name);
// nunu 출력 => nunu는 name 을 가지고 있지 않지만, nunu의 부모가 name을 가지고 있으므로 출력 가능
