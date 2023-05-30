/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for (let sent of sentences) {
        // console.log(sent);
        let words = sent.split(' ').length;
        maxWords = Math.max(words, maxWords);
    }

    return maxWords;
    
};

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));