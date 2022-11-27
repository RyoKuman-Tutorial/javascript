function constructor() {
  this.name = "kim";
}

const newObj = new constructor();

const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log(this);
});
