"use strict";
// Hàm trả về kiểu void
function logMessage(message) {
    console.log(message);
}
// Hàm trả về kiểu never
function throwError(message) {
    throw new Error(message);
}
// Gọi hàm logMessage
logMessage("This is a message"); // In ra "This is a message"
// Gọi hàm throwError
try {
    throwError("An error occurred");
}
catch (error) {
    if (typeof error === "object" && error !== null && "message" in error) {
        console.error(error.message); // Sử dụng type assertion để ép kiểu error thành Error
    }
    else {
        console.error("An unknown error occurred");
    }
}
