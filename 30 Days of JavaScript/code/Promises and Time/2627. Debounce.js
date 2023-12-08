// Để triển khai phiên bản đã được gỡ bỏ của hàm,
// bạn cần theo dõi lệnh gọi hàm gần đây nhất và sử dụng setTimeout để trì hoãn việc thực thi hàm.
// Nếu hàm được gọi lại trong khoảng thời gian, bạn sẽ hủy thời gian chờ hiện có và lên lịch cho một thời gian mới.

function debounce(fn, t) {
    let timeoutId;
    let lastArgs;
    let lastCallTime = 0;
    const currentTime = Date.now();

    function executeDebounced(...args) {
        lastCallTime = Date.now();
        lastArgs = args;

        if (currentTime - lastCallTime < t) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn(...lastArgs);
        }, t);
    }

    return executeDebounced;

    // let timeoutId;
    // return function (...args) {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(() => fn(...args), t);
    // };
}

// Example usage:
let output = [];
let start = Date.now();

function log(...inputs) {
    output.push({ t: Date.now() - start, inputs });
}

// const dlog = debounce(log, 55);

// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);
const dlog = debounce(console.log, 1000);
dlog("Hello"); // cancelled
dlog("Xin chao"); // cancelled
dlog("Nin hao"); // cancelled
dlog("Halo"); // Logged at t=100ms
// For displaying the output
setTimeout(() => {
    console.log(output);
}, 150);

/*
Explanation:

1. Hàm gỡ lỗi debounce lấy hàm ban đầu fn và thời gian t làm đối số và trả về hàm đã gỡ lỗi execDebounced.
2. Bên trong execDebounced, nó so sánh thời gian giữa lệnh gọi hiện tại và lệnh gọi cuối cùng với hàm. 
    Nếu thời gian trôi qua nhỏ hơn t, nó sẽ xóa thời gian chờ hiện tại để ngăn chức năng thực thi.
3. Nó đặt thời gian chờ mới để thực thi hàm sau t mili giây với các đối số gần đây nhất được truyền cho hàm bị trả lại.
4. Ví dụ này minh họa việc sử dụng setTimeout để gọi hàm đã gỡ lỗi với các đầu vào khác nhau và 
    hiển thị đầu ra cuối cùng sau một thời gian nhất định để hiển thị cách quản lý và thực thi các lệnh gọi dựa trên khoảng thời gian được cung cấp.

*/
