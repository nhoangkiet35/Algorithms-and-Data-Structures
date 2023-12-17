// To reorder the linked list with nodes grouped by odd and even indices while maintaining their relative order within each group,
// you can use a straightforward approach involving two pointers to separate odd and even nodes.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function oddEvenList(head) {
    if (!head || !head.next || !head.next.next) {
        return head; // No need to reorder if there are 0, 1, or 2 nodes
    }

    let odd = head;
    let even = head.next;
    let evenHead = even; // Save the head of the even nodes

    while (even && even.next) {
        odd.next = even.next; // Link odd nodes
        odd = odd.next;
        even.next = odd.next; // Link even nodes
        even = even.next;
    }

    odd.next = evenHead; // Connect odd list with even list

    return head;
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original list:");
let currentNode = head;
while (currentNode) {
    process.stdout.write(currentNode.val + " -> ");
    currentNode = currentNode.next;
}
console.log("null");

head = oddEvenList(head);

console.log("\nReordered list:");
currentNode = head;
while (currentNode) {
    process.stdout.write(currentNode.val + " -> ");
    currentNode = currentNode.next;
}
console.log("null");
/*

This code defines a ListNode class and a function oddEvenList that reorders the linked list as described. 
It uses two pointers, odd and even, to separate the nodes into odd and even groups. 
It iterates through the list, adjusting pointers to rearrange the nodes accordingly. 
Finally, it reconnects the odd and even lists and returns the modified head.

*/
