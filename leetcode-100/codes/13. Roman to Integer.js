/*
Để chuyển đổi một chữ số La Mã thành một số nguyên trong JavaScript, 
bạn có thể tạo một hàm lặp qua chuỗi chữ số La Mã và 
theo dõi tổng giá trị bằng cách so sánh ký hiệu hiện tại với ký hiệu tiếp theo. 
Nếu giá trị của ký hiệu hiện tại nhỏ hơn giá trị của ký hiệu tiếp theo, 
nó sẽ trừ tổng giá trị của ký hiệu hiện tại; nếu không, nó sẽ thêm nó. 
*/
const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanNumerals[s[i]];
        const nextVal = romanNumerals[s[i + 1]];
        console.log(currentVal, nextVal);
        if (nextVal && currentVal < nextVal) {
            // CM = M - C = 1000 - 100 = 900
            result += nextVal - currentVal;
            i++; // Skip the next value as it's already considered
        } else {
            result += currentVal;
        }
    }

    return result;
}

// Test cases
// console.log(romanToInt("III")); // Output: 3
// console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

/*
Hàm romanToInt này lấy chuỗi chữ số La Mã s làm đầu vào và lặp qua chuỗi đó. 
Nó so sánh giá trị hiện tại với giá trị tiếp theo để xác định xem nên trừ 
hay cộng vào tổng giá trị, dựa trên quy tắc chữ số La Mã.
*/
