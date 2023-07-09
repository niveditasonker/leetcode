var hasCycle = function(head) {
    let left = head;

    while (left && left.next){
        head = head.next;
        left = left.next.next;
        if (head == left) {
            return true;
        }
    }

    return false;
};