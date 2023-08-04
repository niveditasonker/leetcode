var map = function(arr, fn) {
    let res= [];
    arr.forEach((elem, idx) => {
        res[idx] = fn(elem, idx);
    });
    return res;
};

var map2 = function(arr, fn) {
    var n = arr.length;
    for(var i = 0; i < n; i++){
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

arr = [1,2,3], fn = function plusone(n) { return n + 1; };
console.log(map(arr, fn));
console.log(map2(arr, fn));