var checkIfPangram = function(sentence) {
    let senteceSet = new Set();

    // add letters of sentence to hash set
    for(let i=0; i<sentence.length; i++) {
        senteceSet.add(sentence[i]);
    }

    // Since only english lettes, return true is set has 26 letters
    return senteceSet.size === 26;
};

let sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence));
sentence = "leetcode"
console.log(checkIfPangram(sentence));