var reverseList = function(head) {
    let prev = null, next = null;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};