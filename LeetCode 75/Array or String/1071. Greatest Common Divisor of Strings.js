// Để giải quyết vấn đề này, bạn có thể sử dụng ước số chung lớn nhất (GCD) của độ dài của chuỗi. Đầu tiên, tìm GCD có độ dài str1 và str2. Sau đó, kiểm tra xem chuỗi con có độ dài đó có chia hết cả str1 và str2 hay không.
function gcd(a, b) {
    // Euclidean algorithm to find GCD
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function gcdOfStrings(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const gcdLength = gcd(len1, len2);
    const subStr = str1.substring(0, gcdLength);

    // Check if the substring divides both str1 and str2
    if (
        str1 === subStr.repeat(len1 / gcdLength) &&
        str2 === subStr.repeat(len2 / gcdLength)
    ) {
        return subStr;
    } else {
        return "";
    }
}

// Example usage:
let str1 = "ABCABC";
let str2 = "ABC";
let result = gcdOfStrings(str1, str2);
console.log(result); // Output: "ABC"

(str1 = "ABABAB"), (str2 = "ABAB");
result = gcdOfStrings(str1, str2);
console.log(result); // Output: "ABC"

(str1 = "LEET"), (str2 = "CODE");
result = gcdOfStrings(str1, str2);
console.log(result); // Output: "ABC"

/*
Mã này xác định hàm gcd để tính ước số chung lớn nhất và hàm gcdOfStrings sử dụng GCD để tìm chuỗi lớn nhất chia cả str1 và str2. Điều chỉnh chuỗi đầu vào nếu cần và sử dụng chức năng này để tìm chuỗi phân chia lớn nhất giữa chúng.
*/
