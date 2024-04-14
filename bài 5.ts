// Khai báo 2 biến thuộc kiểu dữ liệu any và unknown
let variable1: any;
let variable2: unknown;

// Gán giá trị cho biến variable1 và variable2
variable1 = 10; 
variable2 = 10; 

// Ví dụ về phân biệt kiểu dữ liệu any và unknown
let stringValue: string = variable1; // Không có lỗi, vì kiểu dữ liệu của variable1 là any, nó có thể gán cho mọi kiểu dữ liệu
// let stringValue2: string = variable2; // Lỗi, vì kiểu dữ liệu của variable2 là unknown, nó không chắc chắn có thể gán cho kiểu dữ liệu string
if (typeof variable2 === "string") {
    let stringValue2: string = variable2; // Không có lỗi, vì kiểu dữ liệu của variable2 đã được kiểm tra
}

console.log(stringValue); // In ra 10
