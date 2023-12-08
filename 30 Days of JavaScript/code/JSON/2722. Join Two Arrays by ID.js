function mergeArrays(arr1, arr2) {
    const idMap = {};

    arr1.forEach((obj) => {
        idMap[obj.id] = obj;
    });

    arr2.forEach((obj) => {
        const existingObj = idMap[obj.id];
        if (existingObj) {
            Object.keys(obj).forEach((key) => {
                existingObj[key] = obj[key];
            });
        } else {
            idMap[obj.id] = obj;
        }
    });

    return Object.values(idMap).sort((a, b) => a.id - b.id);
}

// Example usage:

const arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
];
const arr2 = [{ id: 3, x: 5 }];

console.log(mergeArrays(arr1, arr2)); // Output for arr1 and arr2

const arr3 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
];
const arr4 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
];

console.log(mergeArrays(arr3, arr4)); // Output for arr3 and arr4

const arr5 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr6 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(mergeArrays(arr5, arr6)); // Output for arr5 and arr6

/*
Explanation:

1. Hàm mergeArrays lấy hai mảng arr1 và arr2 làm tham số.
2. Nó tạo một đối tượng idMap để lưu trữ các phần tử dựa trên trường id của chúng dưới dạng khóa.
3. Nó lặp qua mảng1 và điền vào đối tượng idMap các phần tử từ mảng1 bằng cách sử dụng id của chúng làm khóa.
4. Sau đó, nó lặp qua mảng2 và kiểm tra xem một đối tượng có cùng id có tồn tại trong idMap hay không.
5. Nếu một đối tượng có cùng id tồn tại, nó sẽ hợp nhất các thuộc tính từ mảng2 vào đối tượng hiện có. 
Nếu không, nó sẽ thêm đối tượng từ mảng2 vào idMap.
6. Cuối cùng, nó trả về các giá trị từ đối tượng idMap dưới dạng một mảng và sắp xếp nó dựa trên trường id theo thứ tự tăng dần.

*/
