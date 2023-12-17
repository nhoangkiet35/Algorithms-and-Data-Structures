// To delete the middle node of a linked list, you'll typically use the fast-slow pointer approach.
// The idea is to have two pointers: one moving at double the speed of the other.When the faster pointer reaches the end, the slower pointer will be at the middle node.
// Then, you can delete that node.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteMiddleNode(head) {
    if (!head || !head.next) {
        return null; // No node or only one node, so there's no middle node to delete
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // At this point, 'slow' points to the middle node
    if (prev) {
        prev.next = slow.next; // Skip over the middle node
    } else {
        head = head.next; // If the list has only two nodes, delete the first one
    }

    return head;
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(2);
head.next = new ListNode(1);
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

head = deleteMiddleNode(head);

console.log("\nList after deleting the middle node:");
currentNode = head;
while (currentNode) {
    process.stdout.write(currentNode.val + " -> ");
    currentNode = currentNode.next;
}
console.log("null");
/*

This code defines a ListNode class to create nodes and a deleteMiddleNode function that takes the head of a linked list as input and deletes the middle node. 
It uses the fast-slow pointer approach to find and remove the middle node, adjusting pointers accordingly. 
Finally, it demonstrates its usage with an example linked list.

*/
