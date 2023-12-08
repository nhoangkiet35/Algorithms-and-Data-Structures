// Bạn có thể tạo một hàm thực thi hàm được cung cấp theo định kỳ bằng cách sử dụng setInterval
// cho đến khi thời gian hủy được chỉ định bởi cancelT.
// Hàm này trả về một cancelFn dừng khoảng thời gian khi được gọi.
function cancellable(fn, args, t) {
    fn(...args);
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);
    const cancelFn = () => {
        clearInterval(intervalId);
    };
    return cancelFn;
}

// Example usage:
const fn = (x) => x * 2;
const args = [4],
    t = 35,
    cancelT = 190;
const result = [];
const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);
setTimeout(cancel, cancelT);

setTimeout(() => {
    console.log(result); // Output
}, cancelT + t + 15);

// Hàm clearInterval() trong JavaScript được sử dụng để hủy bỏ một hành động được lập lịch bởi hàm setInterval().
// Khi một hàm setInterval() được gọi, nó sẽ thực thi một hành động lặp đi lặp lại sau một khoảng thời gian nhất định.
// Nếu hàm clearInterval() được gọi trước khi hành động được thực thi, hành động đó sẽ không được thực hiện.

// Ví dụ, nếu bạn muốn thực hiện một hành động lặp đi lặp lại sau mỗi 5 giây, bạn có thể sử dụng hàm setInterval()
// để lập lịch cho hành động đó.Nếu bạn muốn hủy bỏ hành động đó, bạn có thể sử dụng hàm clearInterval() để hủy bỏ lịch trình của hành động đó.
