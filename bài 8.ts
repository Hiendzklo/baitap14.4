// Định nghĩa interface Book
interface Book {
    title: string;
    author: string;
    price: number;
    printBook(): void;
    updateBook(title: string, author: string, price: number): void;
}

// Khởi tạo đối tượng Book
const myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 78.91,
    printBook() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`);
    },
    updateBook(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};

// In thông tin đối tượng ban đầu
console.log("Thông tin đối tượng ban đầu:");
myBook.printBook();

// Cập nhật thông tin đối tượng
myBook.updateBook("To Kill a Mockingbird", "Harper Lee", 87.91);

// In thông tin đối tượng sau khi cập nhật
console.log("Thông tin đối tượng sau khi cập nhật:");
myBook.printBook();
