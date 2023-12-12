let result = 0; // Khởi tạo biến result với giá trị ban đầu là 0
let nums = [3, 5, 7, 9]; // Một mảng các số

// Sử dụng phép XOR (^=) để tính toán giá trị của result
for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]; // Thực hiện phép XOR giữa result và từng phần tử trong mảng nums
    console.log("result sau khi XOR với", nums[i], "là", result);
}

console.log("Kết quả cuối cùng của result là", result); // Kết quả cuối cùng của result

// Trong ví dụ này, chúng ta có một mảng nums chứa các số [3, 5, 7, 9]. Vòng lặp tính toán giá trị của result bằng cách thực hiện phép XOR giữa result và từng phần tử trong mảng nums.
// Kết quả cuối cùng của result sẽ là kết quả của phép XOR giữa tất cả các phần tử trong mảng.

/*
Cú pháp result ^= nums[i]; trong JavaScript là một phép gán dùng toán tử XOR (hoặc còn gọi là phép XOR). Đây là một phép toán bit (bitwise operation) trong JavaScript.

Toán tử ^ là toán tử XOR. Khi sử dụng với phép gán ^=, nó thực hiện phép XOR giữa giá trị hiện tại của result và nums[i], và sau đó gán kết quả vào result. 
Cụ thể, phép XOR sẽ thực hiện so sánh từng bit tương ứng của result và nums[i], trả về 1 nếu chỉ một trong hai bit là 1, ngược lại trả về 0.

Nếu result ban đầu có giá trị là 5 (binary: 0101) và nums[i] có giá trị là 3 (binary: 0011), thì result ^= nums[i]; sẽ thực hiện như sau:

result:  0101 (5 in binary)
XOR
nums[i]: 0011 (3 in binary)
----------
result:  0110 (6 in binary)

Sau phép XOR, result sẽ có giá trị là 6 (binary: 0110).

*/
