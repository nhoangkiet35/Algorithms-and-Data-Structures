function longestIncreasingSubsequence(n, arr) {
    // const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence(6, [1, 2, 5, 4, 6, 2]));

// Đọc dữ liệu đầu vào
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let inputArr = [];

// rl.question("Nhập dãy số nguyên, cách nhau bằng dấu cách: ", (numbers) => {
//     inputArr = numbers.trim().split(" ").map(Number);

//     const result = longestIncreasingSubsequence(inputArr);
//     console.log(`Độ dài của dãy con tăng đơn điệu dài nhất là: ${result}`);
//     rl.close();
// });
