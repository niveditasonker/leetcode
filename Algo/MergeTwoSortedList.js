var mergeTwoLists = function(list1, list2) {
    let tmpNode = new ListNode(0, null);
    let currNode = tmpNode;

    while (list1 && list2){
        if (list1.val < list2. val){
            currNode.next = list1;
            list1 = list1.next;
        } else {
            currNode.next = list2;
            list2 = list2.next;
        }

        currNode = currNode.next;
    }

    currNode.next = list1 || list2;

    return tmpNode.next;
};