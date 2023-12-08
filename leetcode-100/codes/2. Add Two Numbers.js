import { SinglyLinkedList, Node } from "./../global/Singly_Linked_List.js";

function addTwoNumbers(l1, l2) {
    let value = 0,
        last,
        list;

    while (l1 || l2) {
        if (l1) {
            value += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            value += l2.val;
            l2 = l2.next;
        }
        if (last) {
            last.next = new Node(value % 10);
            last = last.next;
        } else {
            list = new Node(value % 10);
            last = list;
        }
        value = (value / 10) | 0;
    }

    if (value) {
        last.next = new Node(value);
    }

    return list;
}

/*
This function traverses both linked lists simultaneously, adding the values of the nodes along with the carry and creating a new linked list with the result. It maintains a carry variable to handle cases where the sum of two digits exceeds 9.

Finally, it returns the next node after the dummy head, which contains the resulting linked list representing the sum of the two input linked lists.
*/

const l1 = new SinglyLinkedList();
const l2 = new SinglyLinkedList();
l1.push(2);
l1.push(4);
l1.push(3);
l2.push(5);
l2.push(6);
l2.push(4);
console.log(addTwoNumbers(l1.head, l2.head));
