class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Implement the following on the SinglyLinkedList class:
class SinglyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Method to print the linked list
    printList() {
        let currentNode = this.head;
        while (currentNode) {
            process.stdout.write(currentNode.val + " -> ");
            currentNode = currentNode.next;
        }
        console.log("null");
    }

    // This function should take in a value and add a node to the end of the SinglyLinkedList.
    // It should return the SinglyLinkedList.
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // This function should remove a node at the end of the SinglyLinkedList.
    // It should return the node removed.
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // This function should find a node at a specified index in a SinglyLinkedList.
    // It should return the found node.
    get(index) {
        if (index < 0 || index >= this.length || !this.head) return null;
        let counter = 0;
        let current = this.head;
        while (counter < index && current) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // This should insert a node at a specified index in a SinglyLinkedList.
    // It should return true if the index is valid, and false if the index is invalid
    // (less than 0 or greater than the length of the list).
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // This function should rotate all the nodes in the list by some number passed in.
    // For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
    // the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
    // The number passed in to rotate can be any integer.
    rotate(k = 0) {
        if (!this.head || this.length === 1 || k === 0) {
            return;
        }

        k = k % this.length;
        if (k < 0) {
            k = this.length + k;
        }

        if (k === 0) {
            return;
        }

        let current = this.head;
        let count = 1;
        while (count < k && current) {
            current = current.next;
            count++;
        }

        this.tail.next = this.head;
        this.head = current.next;
        this.tail = current;
        this.tail.next = null;
    }

    // This function should accept an index and a value and update the value of the node
    // in the SinglyLinkedList at the index with the new value.
    // It should return true if the node is updated successfully, or false if an invalid index is passed in.
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // This function should remove a node at a specified index in a SinglyLinkedList.
    // It should return the removed node.
    // if the index is valid, or undefined if the index is invalid.
    remove(index) {
        if (index < 0 || index >= this.length || !this.head) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
singlyLinkedList.printList();

// singlyLinkedList.rotate(-2);
// singlyLinkedList.head.val; // 20
// singlyLinkedList.head.next.val; // 25
// singlyLinkedList.head.next.next.val; // 5
// singlyLinkedList.head.next.next.next.val; // 10
// singlyLinkedList.head.next.next.next.next.val; // 15
// singlyLinkedList.tail.val; // 15
// singlyLinkedList.tail.next; // null

console.log(singlyLinkedList.remove(2).val); // Output: 15
console.log(singlyLinkedList.remove(100)); // Output: undefined
// console.log(singlyLinkedList.length); // Output: 4

singlyLinkedList.printList();
