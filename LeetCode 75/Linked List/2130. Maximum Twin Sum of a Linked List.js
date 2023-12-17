class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function maxTwinSum(head) {
    if (!head || !head.next) {
        return 0; // If the list is empty or has only one node, return 0
    }

    // so slow and weight
    // const map = new Map();
    // let maxSum = 0;
    // let sum = 0;
    // let current = head;
    // let key = 0;

    // while (current) {
    //     map.set(key, current.val);
    //     current = current.next;
    //     key++;
    // }

    // for (let i = 0; i < Math.round(key / 2); i++) {
    //     sum = map.get(i) + map.get(key - 1 - i);
    //     maxSum = Math.max(maxSum, sum);
    // }
    // return maxSum;

    // no using Map
    let leftRev = null;
    let prev = null;
    let slow = head;
    let fast = head;

    // find the middle node
    while (fast) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;

        prev.next = leftRev;
        leftRev = prev;
    }

    let maxTwinPair = 0;

    while (slow) {
        maxTwinPair = Math.max(maxTwinPair, slow.val + leftRev.val);
        slow = slow.next;
        leftRev = leftRev.next;
    }

    return maxTwinPair;
}

// function maxTwinSum(head) {
//     if (!head || !head.next) {
//         return 0; // If the list is empty or has only one node, return 0
//     }

//     // Helper function to find the length of the linked list
//     const findLength = (node) => {
//         let length = 0;
//         while (node && node.next) {
//             length++;
//             node = node.next;
//         }
//         return length;
//     };

//     // Helper function to get the node at a specific index
//     const getNodeAtIndex = (node, index) => {
//         let count = 0;
//         while (count < index && node) {
//             node = node.next;
//             count++;
//         }
//         return node;
//     };

//     const length = findLength(head);
//     let maxSum = 0;

//     for (let i = 0; i < length / 2; i++) {
//         const node = getNodeAtIndex(head, i);
//         const twinNode = getNodeAtIndex(head, length - i);

//         const sum = node.val + twinNode.val;
//         maxSum = Math.max(sum, maxSum);
//     }

//     return maxSum;
// }

// Test cases
const list1 = new ListNode(
    5,
    new ListNode(4, new ListNode(2, new ListNode(1))),
);
console.log(maxTwinSum(list1)); // Output: 6

const list2 = new ListNode(
    4,
    new ListNode(2, new ListNode(2, new ListNode(3))),
);
console.log(maxTwinSum(list2)); // Output: 7

const list3 = new ListNode(1, new ListNode(100000));
console.log(maxTwinSum(list3)); // Output: 100001
