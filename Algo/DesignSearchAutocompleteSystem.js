/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.search = '';
    this.sentences = [];
    for(let x = 0; x < sentences.length; x++) {
        this.sentences.push({
            text: sentences[x],
            searchCount: times[x],
        });
    }

    this.storeSearch = function() {
        let sentencePlace = this.sentences.findIndex(sentence=> sentence.text === this.search);
        if(sentencePlace >= 0) {
            this.sentences[sentencePlace].searchCount++;
        } else {
            this.sentences.push({
                text: this.search,
                searchCount: 1,
            });
        }

        this.search = '';
    }
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    let matches = [];
    if(c === '#') {
        this.storeSearch();
    } else {
        this.search += c;
        matches = this.sentences.filter(sentence=> sentence.text.startsWith(this.search));
        matches.sort((a, b)=> {
            let sortA = b.searchCount - a.searchCount;
            let sortB = a.text > b.text? 1: -1;
            return sortA? sortA: sortB;
        });
        matches = matches.map(match=> match.text);
    }
    return matches.slice(0, 3);
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */