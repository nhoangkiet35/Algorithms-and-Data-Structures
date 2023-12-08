function chunkArray(arr, size) {
    if (size <= 0) {
        throw new Error("Size should be a positive number.");
    }

    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const size1 = 1;
console.log(chunkArray(arr1, size1)); // Output for arr1 and size1

const arr2 = [1, 9, 6, 3, 2];
const size2 = 3;
console.log(chunkArray(arr2, size2)); // Output for arr2 and size2

const arr3 = [8, 5, 3, 2, 6];
const size3 = 6;
console.log(chunkArray(arr3, size3)); // Output for arr3 and size3

const arr4 = [];
const size4 = 1;
console.log(chunkArray(arr4, size4)); // Output for arr4 and size4

/*
Explanation:

1. Hàm chunkArray lấy một chuck mảng và kích thước khối làm tham số.
2. Nó khởi tạo một mảng trống chunkedArray để lưu trữ các mảng con được phân đoạn.
3. Nó sử dụng vòng lặp while để lặp qua mảng và cắt nó thành các phần có kích thước bằng cách sử dụng arr.slice(index, index + size).
4. Các khối được cắt lát sau đó được đẩy vào chunkedArray.
5. Vòng lặp tiếp tục cho đến khi kết thúc mảng và hàm trả về chunkedArray chứa các mảng con được phân đoạn.

Hàm này kiểm tra các trường hợp biên như khi kích thước nhỏ hơn hoặc bằng 0 và cung cấp cách triển khai để chia mảng thành các phần tương ứng.

*/
