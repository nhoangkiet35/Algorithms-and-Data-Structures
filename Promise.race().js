/*
Hàm Promise.race() trong JavaScript được sử dụng để thực hiện các hoạt động bất đồng bộ độc lập song song với nhau, và trả về giá trị của bất kỳ Promise nào được giải quyết đầu tiên. Nó chấp nhận một đối tượng Iterable như một mảng các Promise làm đầu vào 123.

Ví dụ, nếu bạn muốn thực hiện hai hoạt động bất đồng bộ song song và chỉ quan tâm đến kết quả của hoạt động nhanh nhất, bạn có thể sử dụng hàm Promise.race() để lập lịch cho các hoạt động đó. Nếu một trong các hoạt động được giải quyết trước, hàm Promise.race() sẽ trả về giá trị của Promise đó.

Dưới đây là một ví dụ đơn giản về cách sử dụng hàm Promise.race() trong JavaScript:
*/
// Lập lịch cho hai hoạt động bất đồng bộ song song
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Giải quyết Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Giải quyết Promise 2");
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // Giải quyết Promise 2
    // Giải quyết Promise 2 được giải quyết trước, vì thời gian chờ của nó ngắn hơn.
});
