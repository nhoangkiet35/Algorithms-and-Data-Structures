// Bạn có thể tạo một hàm ghi nhớ lấy một hàm fn khác làm đầu vào và trả về phiên bản đã ghi nhớ của hàm đó.
// Đây là cách triển khai cho ba hàm đầu vào có thể có: tổng, fib và giai thừa:
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Test case
function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function executeActions(fnName, actions, values) {
    let output = [];
    let memoizedFn;

    if (fnName === "sum") {
        memoizedFn = memoize(sum);
    } else if (fnName === "fib") {
        memoizedFn = memoize(fib);
    } else if (fnName === "factorial") {
        memoizedFn = memoize(factorial);
    }

    let callCount = 0;
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        if (action === "call") {
            const result = memoizedFn(...values[i]);
            output.push(result);
            callCount++;
        } else if (action === "getCallCount") {
            output.push(callCount);
        }
    }
    return output;
}

// Test cases
const fnName1 = "sum";
const actions1 = ["call", "call", "getCallCount", "call", "getCallCount"];
const values1 = [[2, 2], [2, 2], [], [1, 2], []];
const output1 = executeActions(fnName1, actions1, values1);
console.log(output1); // Output: [4, 4, 2, 3, 3]

const fnName2 = "factorial";
const actions2 = [
    "call",
    "call",
    "call",
    "getCallCount",
    "call",
    "getCallCount",
];
const values2 = [[2], [3], [2], [], [3], []];
const output2 = executeActions(fnName2, actions2, values2);
console.log(output2); // Output: [2, 6, 2, 3, 6, 4]

const fnName3 = "fib";
const actions3 = ["call", "getCallCount"];
const values3 = [[5], []];
const output3 = executeActions(fnName3, actions3, values3);
console.log(output3); // Output: [8, 1]

// Mã này xác định hàm ghi nhớ tạo một bao đóng để lưu trữ các kết quả được tính toán trước đó cho một tập hợp đối số nhất định trong đối tượng bộ đệm. Hàm execActions mô phỏng các hành động khác nhau (chẳng hạn như gọi hàm đã ghi nhớ hoặc lấy số lượng cuộc gọi) cho hàm và giá trị được chỉ định. Các đầu ra được cung cấp trong ví dụ này dựa trên các hành động mô phỏng này cho các chức năng đầu vào đã cho.
