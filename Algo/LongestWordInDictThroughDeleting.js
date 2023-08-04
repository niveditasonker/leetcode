var findLongestWord = function(S, D) {
    let ans = ""
    for (let word of D) {
        let a = word.length, b = ans.length
        if (a < b || (a === b && word > ans)) continue
        let pos = -1
        for (let char of word) {
            pos = S.indexOf(char, pos + 1)
            if (pos === -1) break
        }
        if (pos !== -1) ans = word
    }
    return ans
};

let s = "abpcplea", dictionary = ["ale","apple","monkey","plea"];
console.log(findLongestWord(s,dictionary));