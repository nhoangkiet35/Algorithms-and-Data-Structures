/*
Absolutely! Here's a JavaScript implementation of the myAtoi function that follows the specified algorithm:
*/
const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);
function myAtoi(s) {
    // skipping leading whitespace
    s = s.trim();
    let i = 0;
    const n = s.length;

    // handling signs
    let sign = 1;
    if (i < n && (s[i] === "-" || s[i] === "+")) {
        sign = s[i++] === "-" ? -1 : 1;
    }

    // parsing numerical values
    let result = 0;
    while (i < n && /^\d$/.test(s[i])) {
        result = result * 10 + s[i] * 1;
        i++;

        // Checking for integer range overflow
        if (sign === 1 && result > INT_MAX) {
            return INT_MAX;
        } else if (sign === -1 && -result < INT_MIN) {
            return INT_MIN;
        }
    }
    return result * sign;
}

// Test cases
console.log(myAtoi("0042")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193

/*
Hàm này tuân theo các bước được nêu trong thuật toán: 

1. Bỏ qua khoảng trắng ở đầu. 
2. Xử lý các dấu hiệu. 
3. Phân tích các giá trị số và kiểm tra tràn. 
4. Trả về số nguyên được phân tích cú pháp trong khi xem xét các điều kiện dấu và tràn trong phạm vi số nguyên có dấu 32-bit.
*/
