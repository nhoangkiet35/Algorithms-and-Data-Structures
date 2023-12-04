function performOperations(a, b) {
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const division = Math.floor(a / b);
    const modulus = a % b;

    return [sum, difference, product, division, modulus];
}

// Đọc dữ liệu đầu vào từ stdin
// const a = BigInt("1234567890123456789012345678901234567890"); // Thay đổi giá trị của a tại đây
// const b = BigInt("987654321098765432109876543210987654321"); // Thay đổi giá trị của b tại đây

const a = 56;
const b = 50;
const results = performOperations(a, b);

// FULFILLED
// In kết quả ra stdout
results.forEach((result) => console.log(result.toString()));
