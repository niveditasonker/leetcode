var longestWord = function(words) {
    const prefixes = new Set()
    words.sort()
    let longest = "";  
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (word.length === 1 || prefixes.has(word.substring(0,word.length - 1))) {
            prefixes.add(word)
            longest = word.length > longest.length ? word : longest
        }
      }
      return longest
  };

let words =
["w","wo","wor","worl","world"];
console.log(longestWord(words));