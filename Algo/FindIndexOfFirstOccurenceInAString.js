var strStr = function(haystack, needle) {
    let k = 0;

    for (let i=0; i<haystack.length; i++){
        if (haystack[i] === needle[k]){
            k++;
            if(k===needle.length){
                return i-(k-1);
            }
        } else {
            i = i-k;
            k = 0;
        }
    }

    return -1;
};

let haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack, needle));

haystack = "leetcode", needle = "leeto";
console.log(strStr(haystack, needle));