
// O(N) time, O(1) space
function reorder(items, newOrder) {
    console.log(items);
    // reorder items inline
    for (let i=0; i<items.length; i++){

        while(newOrder[i] !== i){
            const idx = newOrder[i];
            [items[i], items[idx]] = [items[idx], items[i]] ;
            [newOrder[i], newOrder[idx]] = [newOrder[idx], newOrder[i]];
        }
    }

    return items;
}

let A = ['A', 'B', 'C', 'D', 'E', 'F'];
let B = [1,   5,   4,   3,   2,   0];

console.log(reorder(A,B));