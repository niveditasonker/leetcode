/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function(nums1, nums2) {
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);

    for (let n of nums1) {
        if (n2.has(n)) {
            n1.delete(n);
            n2.delete(n);
        }
    }

    return [Array.from(n1), Array.from(n2)];
}



var findDifference2 = function(nums1, nums2) {
    let map = {};
    let res = [];
    let temp = []

    for (let n of nums1) {
        if(!map[n]) {
            map[n] = 1;
        }
    }

    console.log(map);

    for (let n of nums2){
        if (map[n]) {
            delete map[n];
        } else {
            temp.push(n);
        }
    }

    res.push(temp);
    temp = [];

    for (let k in map) {
        temp.push(k);
    }

    res.unshift(temp);

    return res;
};

let nums1 = [1,2,3], nums2 = [2,4,6];
console.log(findDifference(nums1, nums2));