function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var getDecimalValue = function(head) {
    let res = '';

    while (head != null) {
        res += head.val;
        head = head.next;
    }

    return parseInt(res, 2);
};

var getDecimalValue2 = function(head) {
    let num = 0;
    let list = [];

    while (head) {
        list.push(head.val);
        head = head.next;
    }

    for (let i=0; i<=list.length; i++) {
        num *= 2;
        num += i;
    }

    return num;
};

const getDecimalValue3 = head => {
    let val = 0;
    while (head) {
      val = (val << 1) | head.val;
      head = head.next;
    }
    return val;
  };

// let head = [1,0,1];
const head = new ListNode(2);
list.head.value = 1;
list.head.value.next.value = 0;
list.head.value.next.value.next.value = 1;

/*
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};
*/
console.log(getDecimalValue(head));
console.log(getDecimalValue2(head));
console.log(getDecimalValue3(head));   