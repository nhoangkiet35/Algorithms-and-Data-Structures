/*
Đây là một cách để tạo hàm expect kỳ vọng tạo điều kiện cho việc so sánh giữa các giá trị và đưa ra lỗi nếu chúng không khớp với các điều kiện:
*/
function expect(val) {
    return {
        toBe: function (value) {
            if (val === value) {
                return { value: true };
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (value) {
            if (val !== value) {
                return { value: true };
            } else {
                throw new Error("Equal");
            }
        },
    };
}

// Test cases
const func1 = () => expect(5).toBe(5);
const func2 = () => expect(5).toBe(null);
const func3 = () => expect(5).notToBe(null);

console.log(func1()); // Output: {"value": true}
// console.log(func2()); // Output: Throws an error "Not Equal"
console.log(func3()); // Output: {"value": true}
