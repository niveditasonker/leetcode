/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    const uniqueValues = new Set();

    for (let nums of arr) {
        // check if element exists in the map
        // if not initiate with 1
        // else increment by 1
        if (!map[nums]) {
            map[nums] = 1;
        } else {
            map[nums]++;
        }
    }

    // const values = Object.values(map);
    // console.log (values);
    // const uniqueValues = new Set(values);
    // console.log(uniqueValues);

    for (let key in map) {
        if (uniqueValues.has(map[key])) return false;
        else uniqueValues.add(map[key]);
    }

    return true;
};

let arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr));

arr = [1,2];
console.log(uniqueOccurrences(arr));