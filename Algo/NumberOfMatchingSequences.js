var numMatchingSubseq = function(s, words) {
    let res = 0;

    for (const wrd of words){
        let index = -1;
        let matches = 0;

        for (const w of wrd) {
            const currIdx = s.indexOf(w, index+1);
            console.log(`wrd: ${wrd}, w: ${w}, currIdx: ${currIdx}, index: ${index}, matches: ${matches}`);
            if (currIdx > index) {
                matches++;
                index = currIdx;
                continue;
            }
            break;
        }
        console.log(`matches: ${matches}, ${wrd.length}, res:${res}`);
        if (matches == wrd.length){
            res++; 
        }
    }

    return res;
};

let s = "abcde", words = ["a","bb","acd","ace"];
console.log(numMatchingSubseq(s, words));