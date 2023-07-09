/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict, curr= [], res=[]) {
    if (!s.length) {
        return res.push(curr.join(' '));
    }

    for (let wrd of wordDict){
        if (!s.startsWith(wrd)) continue;

        curr.push(wrd);

        wordBreak(s.slice(wrd.length), wordDict, curr, res);
        curr.pop();
    }

    return res;
};
let s ="catsanddog", wordDict = ["cat","cats","and","sand","dog"];
console.log(wordBreak(s, wordDict));


const backtrack = (s, words, path, result) => {
    if (s.length === 0) {
        result.push(path.join(' '))
        return
    }
    for (let i = 1; i <= s.length; i++) {
        const substring = s.substring(0, i)
        if (words.has(substring)) {
            path.push(substring)
            backtrack(s.slice(i), words, path, result)
            path.pop()
        }
    }
}
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak2 = (s, wordDict) => {
    const result = []
    const words = new Set(wordDict)
    backtrack(s, words, [], result)
    return result
};

console.log(wordBreak2(s, wordDict));