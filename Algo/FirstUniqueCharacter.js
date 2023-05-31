var firstUniqChar = function(s) {
    let data = new Map();

    // loop and create a map with key: letters, value: index
    for (let i=0; i<s.length; i++) {
        if (!data.has(s[i])) {
            data.set(s[i], 1);
        } else {
            data.set(s[i], (data.get(s[i])+1));
        }
    }
    // console.log(data);

    for (let i=0; i<s.length; i++) {
        if(data.get(s[i]) === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));

console.log("========>");

var firstUniqChar2 = function(s) {
    let map = {};

    // loop and create a map with key: letters, value: index
    for(let i=0;i<s.length; i++){
        if(!map[s[i]]) map[s[i]] = 1;
        else map[s[i]]++;
    }
    for(let i=0;i<s.length; i++){
       if(map[s[i]] == 1) return i
    }
    return -1;  
};

console.log(firstUniqChar2("leetcode"));
console.log(firstUniqChar2("loveleetcode"));
console.log(firstUniqChar2("aabb"));