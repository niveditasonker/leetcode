function proxSearch(text, k1, k2, maxrange) {
    if (maxrange < 2) {
      return 0;
    }
    text = text.toLowerCase();
    k1 = k1.toLowerCase();
    k2 = k2.toLowerCase();
    const words = text.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < i + maxrange; j++) {
        if (j >= words.length) {
          break;
        }
        if ((k1 === words[i] && k2 === words[j]) || (k2 === words[i] && k1 === words[j])) {
          count += 1;
        }
      }
    }
    return count;
}

 /*    
    
     Implement a proximity search method.
    
     Given text as input, two keywords and a numeric range, return the number of times
     both keyword 1 and keyword 2 are found within the given range throughout the text, or 0
     if your search is not successful. The keywords themselves are considered to be part of the range.
     This makes 2 the minimum valid range for keyword proximity.
    
     For simplicity, assume all words are separated with a whitespace.
    
     input
    
         text(text)    : The early bird gets the worm
         keyword1(text): bird
         keyword2(text): worm
         range(number) : 4
		 
		      k1= bird k2 = worm
        text: the early bird bird worm worm gets the worm
        
        the early bird bird - 0
        early bird bird worm -  2  bird = 2, worm = 1 -> 2 
        bird bird worm worm  - 2  bird = 2, worm = 1 (as new word is same as old - neglect one word) -> 2
        bird worm worm  gets -0    bird = 0, worm = 0 as all are already processed
        worm worm gets the  - 0
        worm gets the worm - 0
    
    */

let text = 'the early bird bird worm worm gets the worm', k1= 'bird', k2='worm', maxRange = 4;
console.log(proxSearch(text, k1, k2, maxRange));

text = 'the early bird bird.';
console.log(proxSearch(text, k1, k2, maxRange));
