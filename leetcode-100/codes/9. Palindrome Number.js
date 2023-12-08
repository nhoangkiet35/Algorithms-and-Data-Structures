function isPalindrome(x) {
    // if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    // let reversed = 0;
    // let original = x;

    // while (x > 0) {
    //     const digit = x % 10;
    //     reversed = reversed * 10 + digit;
    //     x = Math.floor(x / 10);
    // }
    // return reversed === original;

    // const y = x.toString().split("").reverse().join("");
    // return x == y;

    return Number(x.toString().split("").reverse().join("")) === x;
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(0)); // Output: true

/*
Trước tiên, hàm này kiểm tra xem số đầu vào có âm hay kết thúc bằng 0 nhưng bản thân nó không bằng 0 
(vì các số như 10, 20, v.v., không thể là palindromes). 
Sau đó, nó tạo ra một phiên bản đảo ngược của số bằng cách lặp qua các chữ số của nó và 
so sánh số đảo ngược với số ban đầu để xác định xem đó có phải là palindromes hay không.
*/
