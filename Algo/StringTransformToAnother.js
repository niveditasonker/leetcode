var canConvert = function(str1, str2) {
    if (str1.length !== str2.length) return false;

    if (str1 === str2) return true;

    let map = new Map();

    for (let i=0; i<str1.length; i++){
        if (map.has(str1[i]) && map.get(str1[i]) !== str2[i] ){
            return false;
        }

        map.set(str1[i], str2[i]);
    }

    console.log(map);
    const set = new Set(map.values());
    console.log(set);

    return set.size < 26;
};

let s1 = 'aabcc';
let s2= 'ccdee';
console.log(canConvert(s1, s2));

s1 = 'leetcode'; s2= 'codeleet';
console.log(canConvert(s1, s2));