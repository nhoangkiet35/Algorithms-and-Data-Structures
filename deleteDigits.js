// Tạo hàm để kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Hàm để sinh dãy số theo quy tắc
function generateSequence(n) {
    let count = 0;
    let num = 2;
    let result = "";

    while (count < n) {
        if (isPrime(num)) {
            result += num;
            count++;
        }
        num++;
    }

    return result;
}

// Hàm để xóa k chữ số sao cho số còn lại là lớn nhất
function removeDigitsToMax(str, k) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < str[i]) {
            stack.pop();
            k--;
        }
        stack.push(str[i]);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join("");
}

let input = "5 4";
const [n, k] = input.trim().split(" ").map(Number);
const sequence = generateSequence(n);
const result = removeDigitsToMax(sequence, k);
console.log(`Số lớn nhất thu được sau khi xóa ${k} chữ số là: ${result}`);

// Đọc dữ liệu đầu vào
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("Nhập n và k: ", (input) => {
//     const [n, k] = input.trim().split(" ").map(Number);

//     const sequence = generateSequence(n);
//     const result = removeDigitsToMax(sequence, k);

//     console.log(`Số lớn nhất thu được sau khi xóa ${k} chữ số là: ${result}`);
//     rl.close();
// });
