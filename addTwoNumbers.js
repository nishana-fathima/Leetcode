// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Array → Linked List
function createList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

// Linked List → Array
function printList(head) {
    const result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}


var addTwoNumbers = function(l1, l2) {

    const arr1 = [];
    let current1 = l1;

    while (current1 !== null) {
        arr1.push(current1.val);
        current1 = current1.next;
    }

    const arr2 = [];
    let current2 = l2;

    while (current2 !== null) {
        arr2.push(current2.val);
        current2 = current2.next;
    }

    const rev1 = [...arr1].reverse().join('');
    const rev2 = [...arr2].reverse().join('');

    const ans = BigInt(rev1) + BigInt(rev2);

    const resultArr = String(ans)
        .split('')
        .map(Number)
        .reverse();

    const dummy = new ListNode(0);
    let current = dummy;

    for (let num of resultArr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
};


// Testing
const l1 = createList([2, 4, 3]);
const l2 = createList([5, 6, 4]);

const answer = addTwoNumbers(l1, l2);

console.log(printList(answer));