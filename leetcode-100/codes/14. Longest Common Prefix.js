/*
Bạn có thể giải quyết vấn đề này trong JavaScript bằng cách lặp qua các ký tự của chuỗi đầu tiên trong mảng và 
so sánh chúng với các ký tự tương ứng của các chuỗi khác. Khi bạn tìm thấy một ký tự không khớp 
trên tất cả các chuỗi hoặc nếu bạn đến cuối bất kỳ chuỗi nào, bạn có thể dừng và trả về tiền tố được tìm thấy cho đến nay.
*/
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;

        while (
            j < prefix.length &&
            j < strs[i].length &&
            prefix[j] === strs[i][j]
        ) {
            j++;
        }

        prefix = prefix.substring(0, j); // Update the prefix based on the common characte
        if (prefix === "") {
            break; // If prefix becomes empty, no need to check further
        }
    }

    return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

/*
Hàm longestCommonPrefix này lấy một mảng chuỗi strs làm đầu vào. 
Nó bắt đầu bằng cách giả sử chuỗi đầu tiên là tiền tố ban đầu và lặp qua các chuỗi còn lại, 
kiểm tra các ký tự tiền tố chung bằng cách so sánh chúng với các ký tự trong chuỗi đầu tiên. 
Nó cập nhật tiền tố tương ứng và trả về tiền tố chung dài nhất cuối cùng được tìm thấy trong các chuỗi.
*/
