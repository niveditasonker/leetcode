/*
Array Intersection: Given two arrays, find the intersection
(common elements) between them and return the result as a new array.
*/

const findIntersection = (nums1, nums2) => {
    let map = new Map();
    let res = [];

    for (let n of nums1){
        if (!map.has(n)){
            map[n] = 1;
        } else {
            map[n]++;
        }
    }

    for (let n of nums2){
        if (n in map){
            res.push(n);
        }
    }

    const common = nums1.filter((val) => nums2.includes(val));

    console.log(`Common: ${common}`);
    //https://www.techiedelight.com/find-intersection-arrays-javascript/

    return res;
}

const genericIntersections = (...arrays) => {
    console.log("====> Arrays: ", arrays);
    if(arrays.length === 0){
        return [];
    }

    const set = new Set(arrays[0]);

    for (let i=0; i<arrays.length; i++){
        set.forEach((elem) => {
            if(arrays.includes(elem)){
                set.delete(elem);
            }
        })
    }
    console.log("=====>");
    return Array.from(set);
}

let nums1= [1,2,3,4,5,6,7], nums2 = [8,2,3,4,5,9];
console.log(findIntersection(nums1, nums2));
console.log("===> genericIntersections", genericIntersections(nums1, nums2));

/*
Array Partition: Partition an array into two subarrays, where the first
subarray contains elements smaller than a given value and the second
subarray contains elements greater than or equal to the given value.
The order of elements should be maintained.
*/


const partition = (nums1, k) => {
    let small = [], big = [];
    for (let n of nums1){
        if (n <= k){
            small.push(n);
        } else {
            big.push(n);
        }
    }

    return [small, big];
}

console.log(partition(nums1, 4));