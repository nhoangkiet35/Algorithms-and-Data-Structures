// Bạn có thể đạt được điều này bằng cách xử lý song song việc thực hiện các lời hứa mà không cần sử dụng Promise.all.
// Bạn sẽ lặp qua mảng hàm, thực thi từng hàm để nhận lời hứa và quản lý việc giải quyết / từ chối chúng trong lời hứa được trả về.

function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;
        let hasRejected = false;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((result) => {
                    if (!hasRejected) {
                        results[i] = result;
                        completedCount++;
                        if (completedCount === functions.length) {
                            resolve({
                                t: Date.now(),
                                resolved: results.filter(
                                    (res) => res !== undefined,
                                ),
                            });
                        }
                    }
                })
                .catch((error) => {
                    if (!hasRejected) {
                        hasRejected = true;
                        reject({ t: Date.now(), rejected: error });
                    }
                });
        }

        // // steps 1 and 2 of approach described above
        // let arr = Array(functions.length);
        // let waitingFor = functions.length;

        // // steps 3 and 4
        // for (let i = 0; i < functions.length; ++i) {
        //     functions[i]()
        //         .then((result) => {
        //             arr[i] = result;
        //             if (--waitingFor === 0) resolve(arr);
        //         })
        //         .catch(reject);
        // }
    });

    // using build-in Promise.all
    // return Promise.all(functions.map((fn) => fn()))
    //     .then((results) => results)
    //     .catch((error) => Promise.reject(error));
}

// Example usage:
const functions1 = [
    () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
];

const functions2 = [
    () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => reject("Error"), 100),
        ),
];

const functions3 = [
    () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
    () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
    () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

console.log("functions1");
promiseAll(functions1).then(console.log).catch(console.error); // Output for functions1
console.log("functions2");
promiseAll(functions2).then(console.log).catch(console.error); // Output for functions2
console.log("functions3");
promiseAll(functions3).then(console.log).catch(console.error); // Output for functions3

/*
Explanation:

1. Hàm PromiseAll có một mảng các hàm trả về lời hứa.
2. Nó tạo ra một lời hứa mới (new Promise) để xử lý việc thực thi song song và giải quyết/từ chối các lời hứa do các hàm tạo ra.
3. Trong lời hứa, nó lặp qua từng hàm và đính kèm một trình xử lý .then() và .catch() để xử lý việc giải quyết và từ chối từng lời hứa riêng lẻ.
4. Kết quả được thu thập thành một mảng và được giải quyết khi tất cả lời hứa được giải quyết thành công.
5. Nếu bất kỳ lời hứa nào bị từ chối, nó sẽ ngay lập tức từ chối lời hứa được trả lại kèm theo lý do từ chối lần đầu.

*/
