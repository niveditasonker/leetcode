var groupAnagrams = function(strs) {
    let ans = {};

    for (let i=0; i<strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        // console.log(sorted);

        // ans[sorted] ? ans[sorted].push(strs[i]) : ans[sorted] = [strs[i]];

        if (ans[sorted]) {
            // console.log(ans[sorted]);
            ans[sorted].push(strs[i]);
        } else {
            ans[sorted] = [strs[i]];
        }
    }
    return Object.values(ans);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));