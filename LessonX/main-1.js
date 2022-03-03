/*
1. Học cách truy xuất phần tử bằng Javascript
- Truy xuất bằng id của phần tử --> HTMLElement -> Một phần tử HTML
Lưu ý : HTMLColecton không phải là Array. Nó gần giống Array. Có lenght. Có thể truy xuất vào phần tử bằng index.
Nếu muốn sử dụng những method, những function dành riêng cho Array thì mình phải "ép kiểu" nó về Array.
==> Dùng cú pháp: Array.from(HTMLCollectionOf)

- Truy xuất bằng class của phần tử--> HTMlCollectionOf --> Tập hợp nhiều phần tử HTML
- Truy xuất bằng tên thẻ a ,body, ...
- Truy xuất bằng selector của CSS
*/
const demoId = document.getElementById("demo");
console.log(demoId);

const demoClass = document.getElementsByClassName("demo");
console.log(demoClass);
const demoClassArray = Array.from(demoClass);
demoClassArray.push("ABCD");
console.log(demoClassArray);

for (let index = 0; index < demoClass.length; index++) {
  console.log(demoClass[index]);
}


const div = document.getElementsByTagName("div");
console.log("div = ", div);

const h1 = document.getElementsByTagName("h1");
console.log("h1 =", h1);