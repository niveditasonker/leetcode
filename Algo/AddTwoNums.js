/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum =0, carry = 0;
    let list = new ListNode(0);
    let head = list;
    
    while(l1 !== null || l2 !== null || sum>0) {
        // console.log(l1.val, l2.val);
        if (l1 !== null) {
            sum = l1.val + sum;
            l1 = l1.next;
        }
    

        if (l2 !== null) {
            sum = l2.val  + sum;;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return list.next;

};

let l1 = [2,4,3], l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2));