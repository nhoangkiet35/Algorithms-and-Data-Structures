// EventEmitter class in JavaScript:
class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(subscription);

        const subscription = {
            callback,
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(subscription);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                    return undefined;
                }
                return "unsubscribed";
            },
        };

        return {
            unsubscribe: subscription.unsubscribe,
            subscribed: "subscribed",
        };

        // (this.events[eventName] || (this.events[eventName] = [])).push(
        //     callback,
        // );

        // return {
        //     unsubscribe: () => {
        //         var callbackIndex = this.events[eventName].indexOf(callback);
        //         this.events[eventName].splice(callbackIndex, 1);
        //     },
        // };
    }

    emit(eventName, args = []) {
        const eventCallbacks = this.events[eventName];
        if (!eventCallbacks || eventCallbacks.length === 0) {
            return [];
        }

        const results = [];
        eventCallbacks.forEach(({ callback }) => {
            results.push(callback(...args));
        });

        // return ["emitted", results];
        return results;

        // return (this.events[eventName] || []).map((callback) =>
        //     callback(...args),
        // );
    }
}

// Example Usage
// const actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"];
// const values = [
//     [],
//     ["firstEvent", "function cb1() { return 5; }"],
//     ["firstEvent", "function cb1() { return 6; }"],
//     ["firstEvent"],
// ];
const emitter = new EventEmitter();
// const output = [];
// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
    return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick"));
console.log(sub.unsubscribe());
console.log(emitter.emit("onClick", ["4,5,6"]));
// emitter.emit("onClick"); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit("onClick"); // []

// for (let i = 0; i < actions.length; i++) {
//     const action = actions[i];
//     const value = values[i];
//     console.log(value);

//     if (action === "EventEmitter") {
//         output.push([]);
//     } else if (action === "subscribe") {
//         const [eventName, cbStr] = value;
//         const callback = eval(`(${cbStr})`);
//         output.push(emitter.subscribe(eventName, callback));
//     } else if (action === "emit") {
//         const [eventName, args] = value;
//         output.push(emitter.emit(eventName, args));
//     }
// }

// console.log(output);

/*

Lớp EventEuctor này cho phép đăng ký các sự kiện events và phát ra emitting chúng. 
Phương thức đăng ký subscribe đăng ký các sự kiện và phương thức phát ra emit các sự kiện. 
Nó duy trì sổ đăng ký các sự kiện và lệnh gọi lại của chúng, cho phép nhiều lệnh gọi lại cho cùng một sự kiện. 
Việc sử dụng ví dụ minh họa cách sử dụng lớp EventEuctor dựa trên các tình huống đã cho.

*/
