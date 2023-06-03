var longestCommonPrefix = function(strs) {
    if (strs.length == 1) return strs[0];

    let prefix = strs[0];
    console.log(prefix);

    for (let i=1; i< strs.length; i++) {
        console.log(strs[i], strs[i].indexOf(prefix));
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length-1);
            console.log(prefix);

            if(prefix.length == 0 ) return '' ; 
        }
    }
    return prefix;
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));