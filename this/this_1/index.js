"use strict";

console.log(this);

function func() {
  console.log(this);
}
func();

const obj = {
  data: "kim",
  func: function () {
    console.log(this);
  },
};
obj.func();
