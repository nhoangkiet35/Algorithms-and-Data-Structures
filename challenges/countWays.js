const MOD = 1337377;

function countWays(word, wordsList) {
    const n = word.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (const w of wordsList) {
            if (i >= w.length && word.slice(i - w.length, i) === w) {
                dp[i] += dp[i - w.length];
                dp[i] %= MOD;
            }
        }
    }

    return dp[n];
}

console.log(countWays("abcd", ["a", "b", "cd", "ab"]));

// Đọc dữ liệu đầu vào
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let inputWord = "";
// let words = [];

// rl.question("Nhập từ: ", (word) => {
//     inputWord = word.trim();

//     rl.question("Nhập số lượng từ: ", (N) => {
//         const numWords = parseInt(N);

//         (function readWords(count) {
//             if (count <= 0) {
//                 rl.close();
//                 const result = countWays(inputWord, words);
//                 console.log(result);
//                 return;
//             }

//             rl.question(`Nhập từ thứ ${numWords - count + 1}: `, (w) => {
//                 words.push(w.trim());
//                 readWords(count - 1);
//             });
//         })(numWords);
//     });
// });
