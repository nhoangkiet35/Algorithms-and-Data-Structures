// Một mảng ví dụ
let arr = [10, 20, 30, 40, 50];

// Ví dụ về việc sử dụng i >> 1 để truy cập các phần tử
for (let i = 0; i < arr.length * 2; i++) {
    let accessedIndex = i >> 1; // Dịch phải i một bit (tương đương với i / 2)
    if (accessedIndex < arr.length) {
        console.log("Giá trị tại vị trí", i, "là", arr[accessedIndex]);
    } else {
        console.log("Vị trí", i, "vượt quá chiều dài của mảng");
    }
}
