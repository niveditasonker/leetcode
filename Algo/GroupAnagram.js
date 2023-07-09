var groupAnagrams = function(strs) {
    let ans = {};

    for (let s of strs) {
        let sorted = s.split('').sort().join('');
        // console.log(sorted);

        // ans[sorted] ? ans[sorted].push(strs[i]) : ans[sorted] = [strs[i]];

        if (ans[sorted]) {
            // console.log(ans[sorted]);
            ans[sorted].push(s);
        } else {
            ans[sorted] = [s];
        }
    }
    return Object.values(ans);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));