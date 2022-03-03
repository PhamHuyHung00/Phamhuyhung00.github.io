const img = "https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg";



const image = document.querySelector(".class-demo");

// Thay đổi thuộc tính có sẵn.
// GET: Lấy dữ liệu, lấy thông tin.
// SET: Thiết lập dự liệu moiwi, thiết lập thông tin mới.

// SET
image.setAttribute("src", img);
image.setAttribute("alt", "this is a image");
image.setAttribute("width", 300);
image.setAttribute("title", "Tiêu đề của image");

//GET
const elDataTitle = Array.from(document.querySelectorAll("[data-title]"));

let temp = '';
for (let index = 0; index < elDataTitle.length; index++) {
    //console.log(elDataTitle[index], index);
    temp = temp + elDataTitle[index].getAttribute("data-title")+ " ";
    
}
document.getElementById("demo").setAttribute("data-title", temp.trim());
console.log(temp);
console.log(elDataTitle);
