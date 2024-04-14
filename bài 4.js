"use strict";
// Xây dựng hàm có một tham số với kiểu dữ liệu bất kỳ
function printTypeOfArgument(arg) {
    // In ra kiểu dữ liệu của đối số được truyền vào
    console.log(typeof arg);
}
// Sử dụng hàm và truyền vào các đối số có kiểu dữ liệu khác nhau
printTypeOfArgument(5); // number
printTypeOfArgument("Hello"); // string
printTypeOfArgument(true); //  boolean
printTypeOfArgument([1, 2, 3]); //  object
printTypeOfArgument({ key: "value" }); //  object
