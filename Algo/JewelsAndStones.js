/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// O(n^2) solution
var numJewelsInStones = function(jewels, stones) {
    let totalJewels = 0;

    let stonesArr = stones.split('');
    let jewelsArr = jewels.split('');

    for(let i=0;i<stonesArr.length; i++) {
        if(jewelsArr.includes(stonesArr[i])) totalJewels += 1;
    }

    return totalJewels;
};

// o(n) using hashmap
var numJewelsInStones2 = function(jewels, stones) {
    let totalJewels = 0;
    let map = new Map();

    for(let i=0;i<jewels.length; i++) {
        map.set(jewels[i], i);
    }

    for(let i=0;i<stones.length; i++) {
        if (map.has(stones[i])) totalJewels += 1;
    }

    return totalJewels;
}


console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));

console.log(numJewelsInStones2("aA", "aAAbbbb"));
console.log(numJewelsInStones2("z", "ZZ"));