/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null){
        return head;
    }

    let res = new ListNode(0);
    res.next = head;
    let curr = res;

    while(curr.next !== null && curr.next.next !== null){
        let slow = curr.next;
        let fast = curr.next.next;

        curr.next = fast;
        slow.next = fast.next;
        fast.next = slow;

        curr = curr.next.next;
    }

    return res.next;
};