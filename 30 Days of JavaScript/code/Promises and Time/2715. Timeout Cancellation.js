/*
Để triển khai điều này, bạn có thể tạo một hàm có thể hủy (cancellable) để thiết lập việc thực thi bị trì hoãn 
bằng cách sử dụng setTimeout cho hàm được cung cấp (fn) và các đối số (args). 
Hàm này trả về một hàm khác (cancelFn), khi được gọi trước khi hết thời gian trễ, sẽ hủy việc thực thi.
*/

function cancellable(fn, args, t) {
    // let timeoutId;

    // const delayedExecution = () => {
    //     timeoutId = setTimeout(() => {
    //         fn(...args);
    //     }, t);
    // };

    // delayedExecution();

    // const cancelFn = () => {
    //     clearTimeout(timeoutId);
    // };

    // return cancelFn;
    let timeout = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timeout);
}

// Example usage:
// const fn1 = (x) => x * 5;
const fn1 = (x1, x2) => x1 * x2;
const args1 = [2, 5];
const t1 = 200;
const cancelT1 = 5000;

const result1 = [];
const start1 = performance.now();

const log1 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start1);
    result1.push({ time: diff, returned: fn1(...argsArr) });
};

const cancel1 = cancellable(log1, args1, t1);

const maxT1 = Math.max(t1, cancelT1);

setTimeout(cancel1, cancelT1);

setTimeout(() => {
    console.log(result1);
}, maxT1 + 15);

/*
In this code:

1. Hàm có thể hủy (cancellable) thiết lập việc thực thi trễ của hàm được cung cấp fn với các đối số args được lập sau độ trễ t đã chỉ định.
2. Nó trả về một hàm cancelFn mà khi được gọi sẽ hủy việc thực thi bị trì hoãn bằng cách xóa thời gian chờ bằng ClearTimeout.
3. Việc sử dụng ví dụ minh họa cách sử dụng có thể hủy cancellable với hàm, đối số và độ trễ được cung cấp. 
CancelFn được lên lịch thực thi sau cancelT1 mili giây, cho phép fn thực thi hoặc hủy dựa trên các điều kiện đã chỉ định.

Cấu trúc này cho phép trì hoãn việc thực thi một chức năng, chức năng này có thể bị hủy nếu cần thiết trong một khung thời gian nhất định.
*/

// Hàm clearTimeout() trong JavaScript được sử dụng để hủy bỏ một hành động được lập lịch bởi hàm setTimeout().
// Khi một hàm setTimeout() được gọi, nó sẽ thực thi một hành động sau một khoảng thời gian nhất định.
// Nếu hàm clearTimeout() được gọi trước khi hành động được thực thi, hành động đó sẽ không được thực hiện.

// Ví dụ, nếu bạn muốn thực hiện một hành động sau 5 giây, bạn có thể sử dụng hàm setTimeout() để lập lịch cho hành động đó.
// Nếu bạn muốn hủy bỏ hành động đó, bạn có thể sử dụng hàm clearTimeout() để hủy bỏ lịch trình của hành động đó.
