class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
console.log("Original List:");
let current = head;
while (current !== null) {
    process.stdout.write(current.val + " -> ");
    current = current.next;
}
console.log("null");

const reversedList = reverseList(head);

console.log("Reversed List:");
let reversedCurrent = reversedList;
while (reversedCurrent !== null) {
    process.stdout.write(reversedCurrent.val + " -> ");
    reversedCurrent = reversedCurrent.next;
}
console.log("null");
