function rectangle(a, b) {
  a = 2;
  b = 4;
  console.log("Chu vi hcn: " + (a + b) * 2);
  console.log("Diện tích hcn: " + a * b);
}
function circle(r) {
  r = 3;

  console.log("Chu Vi htr: " + 2 * r * 3.14);
  console.log("Dien Tich htr: " + 2 * r * 3.14);
}
function pt(a, b) {
  a = 1;
  b = 6;
  if (a == 0 && b == 0) {
    console.log("PTVN");
  } else if (a != 0 && b == 0) {
    console.log("PTCN x = 0");
  } else if (a == 0 && b != 0) {
    console.log("PTVN");
  } else {
    console.log("PT có nghiệm x = " + -b / a);
  }
}
function changeUnit(x) {
  x = 10;
  console.log(x + " cm");
  console.log(x + " cm" + " = " + x * 10 + " mm");
  console.log(x + " cm" + " = " + x / 100 + " m");
  console.log(x + " cm" + " = " + x / 100000 + " m");
}
function temperatureChange(c) {
  c = 10;
  console.log("C = " + c);
  console.log("F = " + c * 33.8);
  console.log("K = " + c * 274.14);
}
console.log("Bài 1: ");
rectangle();
console.log("---------------");
console.log("Bài 2: ");
circle();
console.log("---------------");
console.log("Bài 3: ");
pt();
console.log("---------------");
console.log("Bài 4: ");
changeUnit();
console.log("---------------");
console.log("Bài 5: ");
temperatureChange();
