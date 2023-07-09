var wordBreak = function(s, wordDict) {
    const dp = {}
    dp[0] = true
    
    for (let i = 0; i < s.length; i++) {
        if (!dp[i]) continue
        wordDict.forEach(w => {
            console.log(`i: ${i}, w: ${w}, dp[i]: ${dp[i]}, s.slice(i, i + w.length): ${s.slice(i, i + w.length)}`);
            if (s.slice(i, i + w.length) === w)
                dp[i + w.length] = true
        })
    }
    console.log(`dp[s.length]: ${dp[s.length]}`);
    return !!dp[s.length]
};

let s = "leetcode", wordDict = ["leet","code"];
console.log(wordBreak(s, wordDict));

s = "applepenapple", wordDict = ["apple","pen"];
console.log(wordBreak(s, wordDict));