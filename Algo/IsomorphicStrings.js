var isIsomorphic = function(s, t) {

    if (s.length !== t.length) return false;
    let map = new Map();

    for (let i=0; i<s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            map.set(s[i], t[i]);
        }
    }

    // console.log(map);
    // console.log(new Set(map.values()));
    return new Set(map.values()).size === map.size
};


let s = "egg", t = "add";

console.log(isIsomorphic(s, t));

s = "foo", t = "bar";
console.log(isIsomorphic(s, t));

s = "paper", t = "title";
console.log(isIsomorphic(s, t));

s="badc", t = "baba";
console.log(isIsomorphic(s, t));