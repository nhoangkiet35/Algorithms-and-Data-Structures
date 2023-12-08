/*
Sure, here's a JavaScript function that converts a given string into a zigzag pattern based on the number of rows provided:
*/
function convert(s, numRows) {
    if (numRows === 1) return s;
    let result = "";

    const rows = [];
    for (let index = 0; index < Math.min(numRows, s.length); index++) {
        rows[index] = "";
    }
    console.log(rows);

    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }

    for (const row of rows) {
        result += row;
    }

    return result;
}

// Test cases
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("AB", 4)); // Output: "A"

/*
Hàm này lấy chuỗi đầu vào s và số lượng hàng numRows, 
tạo một mảng để lưu trữ từng hàng, lặp qua chuỗi để xây dựng mô hình zigzag theo từng hàng và 
cuối cùng nối các hàng để có được chuỗi đã chuyển đổi.
*/
