//Write a function that returns a map of the totaled occurrences of elements within an array.
function totalOccurences(arr) {
    if (!Array.isArray(arr)) throw new Error('Param as {array} is required');
    return arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) acc[curr] += 1;
    else acc[curr] = 1;
    return acc;
    }, {});
}

function totalOccurences2(arr){
    if (!Array.isArray(arr)) throw new Error('Param as {array} is required');
    let map = new Map();

    for (let n of arr){
        if (map.has(n)){
            map.set(n, map.get(n)+1);
        } else {
            map.set(n, 1);
        }
    }

    return map;
}

let arr = [1,2,2,1,1,3];
console.log(totalOccurences(arr));
console.log(totalOccurences2(arr));