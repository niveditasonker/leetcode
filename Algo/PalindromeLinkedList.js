var isPalindrome = function(head) {
    let slow = head, fast = head;
    let prev;

    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    prev = slow;
    slow = slow.next;
    prev.next = null;

    while (slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    fast = head;
    slow = prev;

    while (slow){
        if (fast.val !== slow.val){
            return false;
        } else {
            fast = fast.next;
            slow = slow.next;
        }
    }

    return true;
};

function Node(data){
	this.val =data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}


var ll = new LinkedList();

ll.head = new Node(3);
ll.head.next = new Node(4);
ll.head.next.next = new Node(9);
ll.head.next.next.next = new Node(4);
ll.head.next.next.next.next = new Node(3);

var ll2 = new LinkedList();

ll2.head = new Node(3);
ll2.head.next = new Node(8);
ll2.head.next.next = new Node(9);
ll2.head.next.next.next = new Node(3);
ll2.head.next.next.next.next = new Node(3);

console.log(isPalindrome(ll.head));
console.log(isPalindrome(ll2.head));