function constructor() {
  this.name = "kim";
}
const newObj = new constructor();

const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log(this);
});

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

const objWithArrow = {
  array: [1, 2, 3, 4],
  func: function () {
    this.array.forEach((a) => {
      console.log(this);
    });
  },
};

objWithArrow.func();
