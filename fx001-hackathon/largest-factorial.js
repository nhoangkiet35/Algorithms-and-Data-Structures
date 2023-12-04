function findMaxValue(arr) {
    const n = arr.length;
    let maxVal = -Infinity;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const value = arr[i] + 2 * arr[j] + 3 * arr[k];
                if (value > maxVal) {
                    maxVal = value;
                }
            }
        }
    }

    return maxVal;
}

// Đọc dữ liệu đầu vào từ stdin
const n = 5; // Thay đổi giá trị n tại đây
const arr = [-1, 2, -2, -3, 5]; // Thay đổi giá trị của mảng tại đây

const maxValue = findMaxValue(arr);
console.log(maxValue);
