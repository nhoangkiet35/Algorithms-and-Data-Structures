// Bạn có thể tạo một hàm map tùy chỉnh trong JavaScript để lặp qua mảng và áp dụng hàm chuyển đổi cho từng phần tử.

function map(arr, fn) {
    const transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const transformedElement = fn(element, i);
        transformedArray.push(transformedElement);
    }
    return transformedArray;
}

// Test cases
const arr1 = [1, 2, 3];
const plusOne = function plusone(n) {
    return n + 1;
};
const result1 = map(arr1, plusOne);
console.log(result1); // Output: [2, 3, 4]

const arr2 = [1, 2, 3];
const plusI = function plusI(n, i) {
    return n + i;
};
const result2 = map(arr2, plusI);
console.log(result2); // Output: [1, 3, 5]

const arr3 = [10, 20, 30];
const constant = function constant() {
    return 42;
};
const result3 = map(arr3, constant);
console.log(result3); // Output: [42, 42, 42]

/*
Hàm map này lấy một mảng (arr) và một hàm (fn) làm đối số. 
Nó lặp qua mảng, áp dụng hàm cho từng phần tử xem xét chỉ mục của nó và 
xây dựng một mảng mới với các giá trị được chuyển đổi.
*/
