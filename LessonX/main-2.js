// Truy xuất phần tử trong Selector của CSS
/*
Yêu cầu: Phải nắm rõ phần Selector của CSS
#demo{ }
.calssDemo{ }
Attribute Selector

Có thể sử dụng cách này để thay thế cho công việc truy xuất trong files main.js.
- getElemenById
- getElemensByClassName
- getElemensByTagName

-querySelector("#demo") ->Trả về cho một phần tử đầu tiên tìm thấy được mà match với selector
-querySelectorAll(".demo") -> Trả về cho mình nhiều phần tử matach với selector truyền vào -> Không phải là Array. Muốn ép kiểu về Array giống buổi trước Array.from().
 */

const demoId = document.querySelector("#demo");
console.log(demoId);

console.log(document.querySelector(".demo")); //Trả về class đầu tiên nó tìm thấy.

let demoClass = document.querySelectorAll(".demo");
demoClass = Array.from(demoClass);
console.log(demoClass.push(123));
console.log(demoClass);


const btnModel = document.querySelector("[data-toggle='model']");
console.log(btnModel);
