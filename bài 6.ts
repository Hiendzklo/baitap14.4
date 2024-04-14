// Hàm trả về kiểu void
function logMessage(message: string): void {
    console.log(message);
}

// Hàm trả về kiểu never
function throwError(message: string): never {
    throw new Error(message);
}

// Gọi hàm logMessage
logMessage("This is a message"); // In ra "This is a message"

// Gọi hàm throwError
try {
    throwError("An error occurred");
} catch (error) {
    if (typeof error === "object" && error !== null && "message" in error) {
        console.error((error as Error).message); // Sử dụng type assertion để ép kiểu error thành Error
    } else {
        console.error("An unknown error occurred");
    }
}

