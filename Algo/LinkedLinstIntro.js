class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0
    }

    // size(node){
    //     this.head = node;
    //     console.log("====> size ", this.head);
    //     let count = 0;
    
    //     while(this.head) {
    //         count++;
    //         this.head = this.head.next;
    //     }
    
    //     return count;
    // }
    
    
    getLast(node){
        this.head = node;
        console.log("====> getLast", this.head);
        if (this.head){
            while(this.head.next){
                this.head =  this.head.next;
            }
        }
    
        return this.head;
    }
    
    getFirst(node){
        this.head = node;
        console.log("====> getFirst", this.head);
        return this.head;
    }

    insertAtNode(elem, idx){
        let node = new ListNode(elem);
        
        if (idx > 0){
            let curr = this.head;
            let prev;

            if (idx === 0){
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let i = 0;

                while (i<idx) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
        }
        this.size++;
        // console.log("Inserted: ", this.head.next.next.next);
    }

    deleteAt(index){
        let curr = this.head;
        let prev;
        let i=0;

        if (index===0){
            this.head = curr.next;
        } else {
            while(i < index){
                i++;
                prev = curr;
                curr = curr.next
            }

            prev.next == curr.next;
        }

        this.size--;
        return curr.value;
    }
}



let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

console.log(list);
// console.log(list.getLast(node1));
// console.log(list.getFirst(node1));
// console.log(list.size(node1));
console.log(list.insertAtNode(15, 3));
console.log(list);

console.log(list.deleteAt(2));
console.log(list);
