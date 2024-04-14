"use strict";
// Khai báo 1 biến có kiểu dữ liệu là mảng các số
let numbers = [1, 2, 3, 4, 5, 6, 7];
let filteredNumbers = numbers.filter(num => num > 2 && num < 5);
console.log("Các số lớn hơn 2 và nhỏ hơn 5:");
filteredNumbers.forEach(num => console.log(num));
