function flatten(value) {
    // throw 'Not implemented!';

    return value.reduce((fn, curr) =>  fn.concat(Array.isArray(curr) ? flatten(curr) : curr ), []);
}

function flattenIterative(value) {
    let res = [];
    let copyArr = value.slice();

    while(copyArr.length) {
        const elem = copyArr.shift();
        if (Array.isArray(elem)) {
            copyArr.unshift(...elem);
        } else {
            res.push(elem);
        }
    }

    return elem;
}

console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(flatten([
  [1, 2],
  [3, 4],
])); // 