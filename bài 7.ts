// Định nghĩa interface Student
interface Student {
    id: number;
    name: string;
    class: string;
}

// Khởi tạo mảng students chứa các đối tượng Student
const students: Student[] = [
    { id: 1, name: "John", class: "A" },
    { id: 2, name: "Alice", class: "B" },
    { id: 3, name: "Bob", class: "A" },
    { id: 4, name: "Eve", class: "C" }
];

// Xây dựng hàm filterStudentsInClass để lọc sinh viên trong một lớp cụ thể
function filterStudentsInClass(studentArray: Student[], className: string): Student[] {
    // Sử dụng phương thức filter() để lọc các sinh viên trong mảng theo lớp
    const filteredStudents = studentArray.filter(student => student.class === className);
    return filteredStudents;
}

// Gọi hàm filterStudentsInClass và in ra kết quả
const classAStudents = filterStudentsInClass(students, "A");
console.log("Students in class A:", classAStudents);

const classBStudents = filterStudentsInClass(students, "B");
console.log("Students in class B:", classBStudents);
