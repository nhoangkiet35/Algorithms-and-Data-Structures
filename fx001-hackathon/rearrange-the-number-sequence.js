function isSatisfy(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * 2 === arr[j] + arr[i - 1]) {
                return false;
            }
        }
    }
    return true;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function permute(arr, l, r) {
    let count = 0;

    if (l === r) {
        if (isSatisfy(arr)) {
            console.log(arr.join(" "));
            count++;
        }
    } else {
        for (let i = l; i <= r; i++) {
            swap(arr, l, i);
            count += permute(arr, l + 1, r);
            swap(arr, l, i);
        }
    }
    return count;
}

function countValidPermutations(n, arr) {
    console.log(permute(arr, 0, n - 1));
}

// Đọc dữ liệu đầu vào từ stdin
const n = 4; // Thay đổi giá trị n tại đây
const arr = [11, 22, 33, 44]; // Thay đổi giá trị của mảng tại đây

// DEBUG
countValidPermutations(n, arr);
// Wrong
