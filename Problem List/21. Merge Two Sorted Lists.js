class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to serve as the head of the merged list
    let dummy = new ListNode(-1);
    let current = dummy;

    // Traverse both lists until one of them becomes null
    while (list1 !== null && list2 !== null) {
        // Compare the values of the current nodes in both lists
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        // Move the current pointer to the newly added node
        current = current.next;
    }

    // If one list is not exhausted, append the remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // current.next = list1 || list2;

    // The merged list starts from the next of the dummy node
    return dummy.next;
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5))));

let mergedList = mergeTwoLists(list1, list2);
console.log(JSON.stringify(mergedList)); // Output: {"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":null}}}}}
