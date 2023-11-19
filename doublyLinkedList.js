class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    pop() {
        if (!this.head) return undefined;
        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current, count;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (index !== count) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (index !== count) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        (removedNode.prev = null), (removedNode.next = null);
        (beforeNode.next = afterNode), (afterNode.prev = beforeNode);

        this.length--;
        return removedNode;
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.unshift(val);
        if (index === this.length - 1) return this.push(val);

        let newNode = new Node(val);
        let afterNode = this.get(index);
        let beforeNode = afterNode.prev;

        (newNode.prev = beforeNode), (newNode.next = afterNode);
        (beforeNode.next = newNode), (afterNode.prev = newNode);

        this.length++;
        return this;
    }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.unshift(4); // doublyLinkedList

console.log(doublyLinkedList, doublyLinkedList.remove(0));
