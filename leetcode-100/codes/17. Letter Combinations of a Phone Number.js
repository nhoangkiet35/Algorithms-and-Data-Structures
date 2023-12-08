/*
Để giải quyết vấn đề này trong JavaScript, 
bạn có thể sử dụng phương pháp quay lui để tạo ra 
tất cả các tổ hợp chữ cái có thể có cho các chữ số đã cho 
dựa trên ánh xạ bàn phím điện thoại.
*/
const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    const combinations = [];

    const backtrack = (index, current) => {
        if (index === digits.length) {
            combinations.push(current);
            return;
        }

        const letters = phoneMap[digits[index]];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, current + letters[i]);
        }
    };

    backtrack(0, "");
    return combinations;
}

// Test cases
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // Output: []
console.log(letterCombinations("2")); // Output: ["a","b","c"]
/*
Hàm letterCombinations này lấy một chuỗi các chữ số làm đầu vào và sử dụng ánh xạ các chữ số 
tới các chữ cái tương ứng của chúng trên bàn phím điện thoại. 
Nó sử dụng thuật toán quay lui để tạo ra tất cả các kết hợp có thể có 
bằng cách lặp qua các chữ số và tạo đệ quy các kết hợp bằng cách nối thêm các chữ cái dựa trên ánh xạ. 
Cuối cùng, nó trả về tất cả các kết hợp được tạo dưới dạng một mảng.
*/
