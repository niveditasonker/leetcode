var isValid = function(s, t){
    let map = {};

    if (s.length !== t.length) return false;

    for(let char of s){
        if(map[char]) map[char]++;
        else map[char] = 1;
    }

    for(let char of t) {
        if (map[char] > 0) map[char]--;
        if (map[char] == 0) delete map[char];
    }

    console.log(map);

    return Object.keys(map).length === 0;

}

let s = "listen", t = "silent";
console.log(isValid(s, t));

s = "rat", t = "car";
console.log(isValid(s, t));

s = "a", t = "ab";
console.log(isValid(s, t));

s = "aacc", t="ccac";
console.log(isValid(s, t));