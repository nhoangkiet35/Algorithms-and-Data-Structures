// Hàm tính tổng các chữ số của một số nguyên
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Hàm sinh các số có tối đa n chữ số và tổng các chữ số đúng bằng k
function generateNumbersWithSum(n, k) {
    let result = [];

    // Hàm đệ quy sinh số có tối đa n chữ số
    function generate(current, length, sum) {
        if (length === n) {
            if (sumOfDigits(current) === k) {
                result.push(current);
            }
            return;
        }

        for (let i = 0; i <= 9; i++) {
            let next = current * 10 + i;
            generate(next, length + 1, sum + i);
        }
    }

    // Bắt đầu sinh các số
    for (let i = 0; i <= 9; i++) {
        generate(i, 1, i);
    }

    return result;
}

// Đọc dữ liệu từ input và gọi hàm để giải quyết yêu cầu
// ... (code để đọc dữ liệu từ input và lấy các giá trị n, k, p)
const numbers = generateNumbersWithSum(3, 8);
numbers.sort((a, b) => a - b);

const count = numbers.length;
const pthNumber = numbers[10 - 1];

// FULFILLED
// In ra kết quả
console.log(count);
console.log(pthNumber);
console.log(numbers);
