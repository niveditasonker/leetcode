/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.m = new Map(); // (length x, list of strings of length x)
    // T.C: O(1)
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let len = word.length;
    if (this.m.has(len)) {
        this.m.get(len).push(word);
    } else {
        this.m.set(len, [word]);
    }
    // T.C: O(1)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let len = word.length;
    if (!this.m.has(len)) {
        return false;
    }
    let words = this.m.get(len);
    for (let i = 0; i < words.length; i++) {
        let match = true;
        for (let j = 0; j < words[i].length; j++) {
            if (word[j] !== "." && word[j] !== words[i][j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
    // T.C: O(k*N), where k = length of word, N = # of words
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/*
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
*/
const checkWord = new WordDictionary();
checkWord.addWord("bad");
checkWord.addWord("dad");
checkWord.addWord("mad");
console.log(checkWord.search("pad"));
console.log(checkWord.search("bad"));
console.log(checkWord.search(".ad"));
console.log(checkWord.search("b.."));


// Approach 2
function Node () {
    // children object to store children nodes
    this.children = {};
    
    // boolean to check if the current node represents a letter that is the ending of a word
    this.isWordEnding = false;
    
    // note: you might also want to store this.char here for debugging purposes or for different problems.
}

var WordDictionary2 = function() {
    // the root is a node itself.
    this.root = new Node();
};

WordDictionary2.prototype.addWord = function(word) {
    // we will traverse the trie starting from the root node and add nodes for each letter in word.
    let currentNode = this.root;
    
    for (const char of word) {
        // if a node exists for a given letter then don't do anything.
        // if not create a new node for that letter.
        currentNode.children[char] = currentNode.children[char] || new Node();
        
        // move on to the next node.
        currentNode = currentNode.children[char];
    }
    
    // after looping, the currentNode variable will point to the node representing the last letter of word.
    // so we mark that node as a word ending.
    currentNode.isWordEnding = true;
};

WordDictionary2.prototype.search = function(word) {
    // helper function to call recursively
    const searchHelper = (currentNode, i) => {
        
        // if we reach the i that's the length of word and currentNode is a word ending, word exists.
        if (i === word.length) return currentNode.isWordEnding
        
        const char = word[i]
        
        // if char is a dot, that means we can match it with any letter.
        // to do that programmatically, we go through all of the children of the current node. why?
        // we don't know which, if any, of the children can use the dot to make the given string.
        // so we go through all of them and check if any of them can return true.
        if (char === '.') {
            for (const char of Object.keys(currentNode.children)) {
                const child = currentNode.children[char];
                if (searchHelper(child, i + 1)) return true
            }
            
            // if no child can make use of the dot to come up with the given word,
            // then even the alternative version (e.g 'pad') 
            // of the given string (e.g 'pa.') doesn't exist in our dictionary.
            return false
        } 
        
        // if char isn't a dot, it's more straightforward...
        else {
            // looking for a letter that should come after another and can't find it?
            // that means the word doesn't exist in our dictionary so return false.
            if (!(char in currentNode.children)) return false
            
            // go on to the next node in our dictionary and the next letter in the word
            return searchHelper(currentNode.children[char], i + 1)
        }
    }
    
    // we call this function by starting at our root node with the index for the first letter in the string
    return searchHelper(this.root, 0)
};

const checkWord2 = new WordDictionary2();
checkWord2.addWord("bad");
checkWord2.addWord("dad");
checkWord2.addWord("mad");
console.log(checkWord2.search("pad"));
console.log(checkWord2.search("bad"));
console.log(checkWord2.search(".ad"));
console.log(checkWord2.search("b.."));