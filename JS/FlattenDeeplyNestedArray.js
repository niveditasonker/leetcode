var flat = function (arr, n) {
    let res = [];

    if (n <1) {
        return arr;
    }

    for (let i=0; i<arr.length; i++){
        const elem = arr[i];
        
        if (n > 0 && Array.isArray(elem)) {
            res.push(...flat(elem,n-1));
        } else {
            res.push(elem);
        }
        
    }
    
    return res;
};

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0;
console.log(flat(arr, n));
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1;
console.log(flat(arr, n));