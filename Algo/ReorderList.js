/**
 * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function findMiddle(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next){
        slow = slow.next;
        fast =fast.next.next;
    }

    return slow;
}

function reverseList(tmphead) {
    let prev=  null;
    let curr = tmphead;

    while(curr){
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }

    return prev;
}

function merge(head1, head2){
    while(head2){
        let tmp = head1.next;
        head1.next = head2;
        head1 = head2;
        head2 = tmp;
    }
}

var reorderList = function(head) {
    let slow = findMiddle(head);
    let tmpHead = reverseList(slow.next);

    slow.next = null; //avoid cycle

    merge(head, tmpHead);
};

let head = [1,2,3,4];

reorderList(head);
console.log(head);