function flatten(value) {
    // throw 'Not implemented!';

    return value.reduce((fn, curr) =>  fn.concat(Array.isArray(curr) ? flatten(curr) : curr ), []);
}

function flattenIterative(value) {
    let res = [];
    let copyArr = value.slice();

    while(value.length) {
        const elem = value.shift();
        if (Array.isArray(elem)) {
            value.unshift(...elem);
        } else {
            res.push(elem);
        }
    }

    return res;
}

console.log(flatten([1, 2, 3])); // [1, 2, 3]
console.log(flatten([1, 2,[ 3]])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(flatten([
  [1, 2],
  [3, 4],
])); // 

console.log(flattenIterative([1, [2, [3]]])); // [1, 2, 3]