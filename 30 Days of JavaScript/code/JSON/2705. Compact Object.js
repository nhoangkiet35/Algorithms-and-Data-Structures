// Đây là một hàm có thể thu gọn một đối tượng hoặc mảng bằng cách loại bỏ các khóa hoặc phần tử chứa các giá trị giả:
function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter((value) => {
                if (Array.isArray(value) || typeof value === "object") {
                    // console.log(value + " is " + typeof value);
                    // console.log(Object.keys(value).length !== 0);
                    if (value) return compactObject(value);
                }
                return Boolean(value);
            })
            .map((value) => {
                // console.log(value);
                if (Array.isArray(value) || typeof value === "object") {
                    return compactObject(value);
                }
                return value;
            });
    } else if (typeof obj === "object") {
        const compactedObj = {};
        if (obj) {
            // console.log("----------");
            // console.log(obj);
            // console.log("----------");
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    if (
                        Array.isArray(obj[key]) ||
                        typeof obj[key] === "object"
                    ) {
                        const compactedValue = compactObject(obj[key]);
                        if (Object.keys(compactedValue).length !== 0) {
                            compactedObj[key] = compactedValue;
                        }
                    } else if (Boolean(obj[key])) {
                        compactedObj[key] = obj[key];
                    }
                }
            }
        }
        return compactedObj;
    }
    return obj;
}

// Example usage:
const obj1 = [null, 0, false, 1];
console.log(compactObject(obj1)); // Output for obj1

const obj2 = { a: null, b: [false, 1] };
console.log(compactObject(obj2)); // Output for obj2

const obj3 = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj3)); // Output for obj3

// const input = {
//     o: 11,
//     a: 68,
//     m: 18,
//     v: true,
//     b: false,
//     h: null,
//     r: false,
//     p: 93,
//     l: true,
//     k: "",
//     n: 79,
//     f: 18,
//     u: null,
//     j: null,
//     e: null,
//     z: {
//         d: true,
//         t: null,
//         o: 21,
//         w: null,
//         m: 82,
//         k: 35,
//         l: 26,
//         r: 45,
//         b: false,
//         z: 0,
//         i: null,
//         c: 33,
//         p: 69,
//         j: 27,
//         e: 53,
//         q: 97,
//         h: true,
//         a: true,
//         n: true,
//         f: 73,
//         u: null,
//     },
//     w: 12,
//     y: 0,
//     q: "",
//     t: null,
//     s: true,
//     x: false,
//     c: true,
//     i: false,
//     g: 29,
// };
// console.log(Object.keys(compactObject(input)).length);

/*

Hàm compactObject này kiểm tra xem đối tượng (obj) đầu vào là một mảng hay một đối tượng. 
Nếu đó là một mảng, nó sẽ lọc các giá trị giả bằng bộ lọc (filter), sau đó áp dụng đệ quy quy trình nén cho các mảng hoặc đối tượng lồng nhau bằng bản đồ (map). 
Đối với các đối tượng, nó lặp qua các khóa, kiểm tra các giá trị sai và xây dựng một đối tượng mới loại trừ các khóa đó.

*/
