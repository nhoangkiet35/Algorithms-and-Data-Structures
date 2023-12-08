// Để làm phẳng một mảng nhiều chiều đến độ sâu n xác định, đây là một hàm thực hiện chức năng đó:
function flattenArray(arr, n) {
    const stack = [...arr.map((item) => [item, n])];
    const result = [];

    while (stack.length > 0) {
        const [item, depth] = stack.pop();

        if (Array.isArray(item) && depth > 0) {
            stack.push(...item.map((subItem) => [subItem, depth - 1]));
        } else {
            result.push(item);
        }
    }
    return result.reverse();

    // Time Limit Exceeded
    // function flattenHelper(arr, depth) {
    //     if (depth === 0) return arr;
    //     return arr.reduce((acc, val) => {
    //         if (Array.isArray(val) && depth > 0) {
    //             return acc.concat(flattenHelper(val, depth - 1));
    //         } else {
    //             return acc.concat(val);
    //         }
    //     }, []);
    // }

    // return flattenHelper(arr, n);
}

// Example usage:
// const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n1 = 0;
// console.log(flattenArray(arr1, n1)); // Output for arr1 and n1

// const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, [12], 10, 11], 12], [13, 14, 15]];
// const n2 = 1;
// console.log(flattenArray(arr2, n2)); // Output for arr2 and n2

const arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, [12], 10, 11], 12],
    [13, 14, 15],
];
const n3 = 2;
var t1 = performance.now();
console.log(flattenArray(arr3, n3)); // Output for arr3 and n3
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Hàm FlattenArray này lấy một mảng arr và độ sâu n làm đối số.
// Nó sử dụng một hàm trợ giúp, FlattenHelper, làm phẳng mảng một cách đệ quy dựa trên độ sâu n đã chỉ định.
// Lệnh gọi đệ quy trong hàm rút gọn reduce cho phép duyệt qua mảng đa chiều và làm phẳng nó đến độ sâu được chỉ định.
