class TrieNode{
    constructor(child = {}, count = 1, endCount = 0){
        this.child = child
        this.count = count
        this.endCount = endCount
    }
}
var Trie = function() {
    this.root = new TrieNode()
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    let current = this.root
    
    for(const char of word){
        if(!current.child[char]){
            current.child[char] = new TrieNode()
            current = current.child[char]
        }else{  
            current = current.child[char]
            current.count++
        }
    }
    current.end = true
    current.endCount++ 
}

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    
    let current = this.root

    for(const char of word){
        if(!current.child[char]){
            return 0
        }else{
            current = current.child[char]
        }
    }
    return current.endCount
}

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    
    let current = this.root
    let min = Infinity

    for(const char of prefix){
        if(!current.child[char]){
            return 0
        }else{
            current = current.child[char]
            min = Math.min(min, current.count)
        }
    }
    return min 
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    
    let current = this.root

    for(const char of word){
        if(!current.child[char]){
            return 0
        }else{
            current = current.child[char]
        }
    }
    if(current.endCount > 0) current.endCount-- 
    current = this.root
    for(const char of word){  
        current = current.child[char]
        current.count--
    }
    return current.endCount
}