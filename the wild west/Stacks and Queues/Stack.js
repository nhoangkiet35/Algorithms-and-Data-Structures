class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // takes in a node and puts it at the top of the stack.
    // Should return the new size of the stack.
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    // removes the node at the top of the stack and returns the value of that node.
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
var stack = new Stack();

stack.push(10); // 1
stack.first.value; // 10
stack.last.value; // 10
stack.push(100);
stack.first.value; // 100
stack.last.value; // 10
stack.push(1000);
stack.first.value; // 1000
stack.last.value; // 10
console.log(stack);
