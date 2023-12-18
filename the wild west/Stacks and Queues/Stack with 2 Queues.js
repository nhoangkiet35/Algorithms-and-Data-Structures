class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value) {
        this.queue2.push(value);

        // Move all elements from queue1 to queue2
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }

        // Swap the queues, making queue2 as primary queue for pushing
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return this;
    }

    pop() {
        if (this.queue1.length === 0) {
            return null;
        }
        return this.queue1.shift();
    }
}

var s = new Stack();
s.push(10).push(20).push(30);
console.log(
    s.pop(), // 30
    s.pop(), // 20
    s.pop(), // 10
    s.pop(), // null
);
s.push(30).push(40).push(50);
console.log(
    s.pop(), // 50
    s.push(60),
    s.pop(), // 60
);
